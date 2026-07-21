-- Add server-side leases without changing existing claim rows or their unique key.
alter table public.mission_claims
  add column if not exists processing_server text,
  add column if not exists processing_at timestamptz,
  add column if not exists last_error text;

alter table public.mission_claims
  drop constraint if exists mission_claims_status_check;

alter table public.mission_claims
  add constraint mission_claims_status_check
  check (status in ('pending', 'processing', 'paid', 'rejected'));

create index if not exists mission_claims_status_created_at_idx
  on public.mission_claims (status, created_at);

create index if not exists mission_claims_processing_lease_idx
  on public.mission_claims (processing_server, processing_at)
  where status = 'processing';

grant select, update on table public.mission_claims to service_role;

-- Leases are claimed inside one database transaction. The bridge can therefore
-- run more than one poller without handing the same pending row to both.
create or replace function public.claim_bridge_poll(
  p_server_id text,
  p_limit integer,
  p_stale_after_seconds integer
)
returns table (
  id uuid,
  username text,
  reward_amount integer,
  role_id text,
  day integer
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_server_id is null or p_server_id !~ '^[A-Za-z0-9_-]{1,64}$' then
    raise exception 'invalid server id';
  end if;

  if p_limit is null or p_limit < 1 or p_limit > 10 then
    raise exception 'invalid claim batch size';
  end if;

  if p_stale_after_seconds is null or p_stale_after_seconds < 60 or p_stale_after_seconds > 86400 then
    raise exception 'invalid lease timeout';
  end if;

  update public.mission_claims
  set status = 'pending',
      processing_server = null,
      processing_at = null,
      last_error = 'Lease expired and was requeued by the bridge'
  where status = 'processing'
    and processing_server = p_server_id
    and (processing_at is null or processing_at < now() - make_interval(secs => p_stale_after_seconds::double precision));

  return query
  with candidates as (
    select claim.id
    from public.mission_claims as claim
    where claim.status = 'pending'
    order by claim.created_at asc, claim.id asc
    limit p_limit
    for update skip locked
  )
  update public.mission_claims as claim
  set status = 'processing',
      processing_server = p_server_id,
      processing_at = now(),
      last_error = null
  from candidates
  where claim.id = candidates.id
  returning claim.id, claim.username, claim.reward_amount, claim.role_id, claim.day;
end;
$$;

revoke all on function public.claim_bridge_poll(text, integer, integer) from public;
grant execute on function public.claim_bridge_poll(text, integer, integer) to service_role;
