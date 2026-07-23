-- Normalized quest definition tables for Snickerland 2
-- Replaces the 180KB static src/data/quests.ts file

-- roles: one row per quest role (e.g., agricultor, minero)
create table public.roles (
  id text primary key,
  name text not null,
  emoji text not null default '',
  color text not null default '#FFAA00'
);

-- days: day definitions 1-30 per role
create table public.days (
  id uuid primary key default gen_random_uuid(),
  role_id text not null references public.roles(id) on delete cascade,
  day integer not null check (day >= 1 and day <= 30),
  title text not null,
  unique (role_id, day)
);

-- tasks: 5 tasks per day
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  day_id uuid not null references public.days(id) on delete cascade,
  task_index integer not null check (task_index >= 0 and task_index <= 4),
  title text not null,
  amount integer not null default 1,
  unique (day_id, task_index)
);

-- rewards: one reward per day (role-owned, day-unique)
create table public.rewards (
  id uuid primary key default gen_random_uuid(),
  role_id text not null references public.roles(id) on delete cascade,
  day_id uuid not null references public.days(id) on delete cascade,
  amount integer not null check (amount > 0),
  title text not null,
  unique (day_id)
);

-- Indexes for common query patterns
create index days_role_id_idx on public.days (role_id);
create index tasks_day_id_idx on public.tasks (day_id);
create index rewards_role_id_idx on public.rewards (role_id);
create index rewards_day_id_idx on public.rewards (day_id);

-- RLS: enable on all tables
alter table public.roles enable row level security;
alter table public.days enable row level security;
alter table public.tasks enable row level security;
alter table public.rewards enable row level security;

-- RLS: public read access (matches existing mission_progress pattern;
-- admin writes use service_role client which bypasses RLS)
create policy "roles_select_public"
  on public.roles
  for select
  to public
  using (true);

create policy "days_select_public"
  on public.days
  for select
  to public
  using (true);

create policy "tasks_select_public"
  on public.tasks
  for select
  to public
  using (true);

create policy "rewards_select_public"
  on public.rewards
  for select
  to public
  using (true);

-- Write policies match the existing public-access pattern used by
-- mission_progress. The real admin gate is the Nitro middleware
-- (ADMIN_KEY env var) plus client-side username check (DanielP1932).

create policy "roles_write_public"
  on public.roles
  for insert
  to public
  with check (true);

create policy "roles_update_public"
  on public.roles
  for update
  to public
  using (true);

create policy "roles_delete_public"
  on public.roles
  for delete
  to public
  using (true);

create policy "days_write_public"
  on public.days
  for insert
  to public
  with check (true);

create policy "days_update_public"
  on public.days
  for update
  to public
  using (true);

create policy "days_delete_public"
  on public.days
  for delete
  to public
  using (true);

create policy "tasks_write_public"
  on public.tasks
  for insert
  to public
  with check (true);

create policy "tasks_update_public"
  on public.tasks
  for update
  to public
  using (true);

create policy "tasks_delete_public"
  on public.tasks
  for delete
  to public
  using (true);

create policy "rewards_write_public"
  on public.rewards
  for insert
  to public
  with check (true);

create policy "rewards_update_public"
  on public.rewards
  for update
  to public
  using (true);

create policy "rewards_delete_public"
  on public.rewards
  for delete
  to public
  using (true);

grant select, insert, update, delete on table public.roles to anon, authenticated;
grant select, insert, update, delete on table public.days to anon, authenticated;
grant select, insert, update, delete on table public.tasks to anon, authenticated;
grant select, insert, update, delete on table public.rewards to anon, authenticated;
