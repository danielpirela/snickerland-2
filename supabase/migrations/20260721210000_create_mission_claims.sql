-- Manual mission reward claims. The unique key makes repeated clicks idempotent per player/day.
create table public.mission_claims (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  role_id text not null,
  day integer not null check (day between 1 and 30),
  reward_amount integer not null check (reward_amount >= 0),
  reward_title text not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'rejected')),
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  paid_by text,
  unique (username, role_id, day)
);

create index mission_claims_status_idx
  on public.mission_claims (status);
create index mission_claims_username_idx
  on public.mission_claims (username);

alter table public.mission_claims enable row level security;

-- This username-only MVP is vulnerable to impersonation and client-side tampering.
-- Real authorization requires Supabase Auth or server-side Minecraft verification.
create policy "mission_claims_select_public"
  on public.mission_claims
  for select
  to public
  using (true);

create policy "mission_claims_insert_public"
  on public.mission_claims
  for insert
  to public
  with check (true);

create policy "mission_claims_update_public"
  on public.mission_claims
  for update
  to public
  using (true)
  with check (true);

grant select, insert, update on table public.mission_claims
  to anon, authenticated;
