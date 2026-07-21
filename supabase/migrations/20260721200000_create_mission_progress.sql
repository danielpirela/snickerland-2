-- Global quest completion rows for the username-only Snickerland product.
create table public.mission_progress (
  username text not null,
  role_id text not null,
  day integer not null check (day between 1 and 30),
  task_index integer not null check (task_index between 0 and 4),
  completed_at timestamptz not null default now(),
  primary key (username, role_id, day, task_index)
);

-- The username prefix supports per-player hydration. The second index supports
-- ordered/grouped reads used by the global scoreboard.
create index mission_progress_username_idx
  on public.mission_progress (username);
create index mission_progress_scoreboard_idx
  on public.mission_progress (username, day, role_id, task_index);

alter table public.mission_progress enable row level security;

-- This is deliberately open because the product currently identifies players
-- only by a typed username. Any client can impersonate another username.
-- Real anti-cheat identity requires Supabase Auth or server-side Minecraft
-- verification before this policy model is made restrictive.
create policy "mission_progress_select_public"
  on public.mission_progress
  for select
  to public
  using (true);

create policy "mission_progress_insert_public"
  on public.mission_progress
  for insert
  to public
  with check (true);

create policy "mission_progress_update_public"
  on public.mission_progress
  for update
  to public
  using (true)
  with check (true);

create policy "mission_progress_delete_public"
  on public.mission_progress
  for delete
  to public
  using (true);

grant select, insert, update, delete on table public.mission_progress
  to anon, authenticated;
