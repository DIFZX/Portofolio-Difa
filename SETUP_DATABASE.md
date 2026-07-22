# Menjalankan portofolio dan panel admin

1. Jalankan **Apache** dan **MySQL** dari XAMPP.
2. Buka `http://localhost/phpmyadmin`.
3. Pilih menu **Import**, lalu pilih file `database.sql` dari folder proyek ini. Langkah ini menyiapkan rating, konten portofolio, dan akun admin.
4. Pastikan proyek berada di dalam folder `htdocs`, kemudian akses melalui alamat Apache, misalnya `http://localhost/Portofolio/`. Jangan membuka `index.html` langsung dari File Explorer.
5. Jika konfigurasi MySQL berbeda, sesuaikan `api/config.php`.

Sebagai alternatif impor melalui phpMyAdmin, jalankan `php setup_database.php` dari terminal di folder proyek.

## Mengakses admin

- Buka `http://localhost/Portofolio/admin.html`.
- Login awal menggunakan username `admin` dan password `admin123`.
- Setelah login pertama, buka menu **Keamanan** lalu segera ganti password bawaan.
- Gunakan tombol **Simpan perubahan** setelah mengedit konten. Perubahan langsung digunakan oleh website publik.
- Gambar profil, logo pendidikan, dan gambar sertifikasi dapat diunggah dari panel admin. Format yang diterima: JPG, PNG, WEBP, atau GIF dengan ukuran maksimal 5 MB.

Konfigurasi bawaan memakai database `db_porto`, user `root`, dan password kosong. Rating dapat disembunyikan tanpa menghapusnya dengan mengubah kolom `is_visible` menjadi `0` melalui phpMyAdmin.
