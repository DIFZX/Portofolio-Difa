# Setup Supabase Portofolio Difa

## 1. Buat project

1. Buka https://supabase.com/dashboard.
2. Pilih **New project**.
3. Gunakan region terdekat, misalnya Singapore.
4. Simpan database password di password manager.

## 2. Buat database, RLS, dan Storage

1. Buka **SQL Editor** pada project Supabase.
2. Salin seluruh isi `supabase/schema.sql`.
3. Jalankan SQL tersebut.

File ini membuat tabel konten dan rating, bucket `portfolio-assets`, serta kebijakan
RLS agar hanya admin yang bisa mengubah konten dan mengunggah gambar.

## 3. Buat akun admin

1. Buka **Authentication > Users**.
2. Pilih **Add user** lalu **Create new user**.
3. Masukkan email dan password admin Anda.
4. Kembali ke **SQL Editor**, lalu jalankan:

```sql
insert into public.portfolio_admins (user_id)
select id from auth.users where email = 'EMAIL_ADMIN_ANDA'
on conflict (user_id) do nothing;
```

Ganti `EMAIL_ADMIN_ANDA` dengan email yang baru dibuat. Karena website ini hanya
memerlukan satu admin, nonaktifkan pendaftaran pengguna publik pada pengaturan Auth.

## 4. Migrasikan rating lama

Jalankan seluruh isi `supabase/legacy-rating.sql` melalui SQL Editor.

## 5. Hubungkan website

1. Buka **Project Settings > API**.
2. Salin **Project URL**.
3. Salin **Publishable key** (atau legacy `anon` key jika publishable key belum tersedia).
4. Tempel keduanya ke `supabase-config.js`.

Jangan pernah menaruh `service_role` key di source code atau GitHub.

## 6. Migrasikan konten aktif MySQL

1. Pastikan Apache dan MySQL XAMPP masih berjalan.
2. Buka `http://localhost/Portofolio/admin.html`.
3. Login menggunakan email dan password Supabase.
4. Admin akan mengambil konten aktif dari MySQL jika tabel Supabase masih kosong.
5. Klik **Simpan perubahan** satu kali untuk menyalinnya ke Supabase.
6. Muat ulang website dan pastikan konten, rating, serta upload gambar bekerja.

