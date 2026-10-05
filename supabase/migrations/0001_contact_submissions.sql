create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text,
  email text not null,
  company text,
  job_title text not null,
  country text not null,
  service text not null,
  message text not null,
  consent_accepted boolean not null,
  locale text not null,
  ip_address text,
  status text not null default 'new'
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_ip_created_at_idx
  on public.contact_submissions (ip_address, created_at desc);

alter table public.contact_submissions enable row level security;
-- No policies: only the server-side secret key (service role) can read/write this table.
