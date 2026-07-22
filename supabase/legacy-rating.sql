-- Rating yang saat ini tersimpan di MySQL lokal.
-- Jalankan satu kali setelah schema.sql selesai.
insert into public.ratings (id, name, origin, message, rating, is_visible, created_at)
values (1, 'Anonym', null, 'Kerennn banget pakk', 5, true, '2026-07-21 12:42:24+07')
on conflict (id) do update set
    name = excluded.name,
    origin = excluded.origin,
    message = excluded.message,
    rating = excluded.rating,
    is_visible = excluded.is_visible,
    created_at = excluded.created_at;

select setval(
    pg_get_serial_sequence('public.ratings', 'id'),
    greatest((select coalesce(max(id), 1) from public.ratings), 1),
    true
);
