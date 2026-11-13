# Prawira — Modern Dark Digital Portfolio

**Status:** Tahap 1 — Design Foundation telah diimplementasikan pada root ini. Lihat `docs/07-PHASE-1-RUN-AND-REVIEW.md` untuk cara menjalankan, hasil QA, dan batas cakupan.

Quick start: `npm ci`, `npm run dev`, lalu buka http://localhost:3000. Validasi: `npm run lint` dan `npm run build`.

Bagian berikut adalah dokumentasi handoff asli; petunjuk pemindahan proyek merupakan konteks paket awal.

Paket ini memindahkan arah desain, konteks konten, dan referensi visual portofolio pribadi Prawira Wibawa Hutagalung agar Codex dapat membangun website secara bertahap tanpa kehilangan keputusan desain.

## Mulai di Codex Desktop / local workspace

1. Ekstrak ZIP menjadi folder `prawira-portfolio-codex`.
2. Buka **Codex** pada aplikasi desktop, pilih **Add project/Open folder**, lalu arahkan ke folder ini. Bila pilihan UI berbeda, gunakan fitur pembukaan folder lokal Codex.
3. Codex perlu membaca `AGENTS.md`, `docs/`, `content/projects.json`, `design/tokens.css`, dan `reference/`.
4. Buka `CODEX_START_PROMPT.md`; salin instruksinya ke percakapan Codex baru.
5. Minta Codex membangun **Tahap 1** terlebih dahulu, menjalankan aplikasi, dan menampilkan preview desktop serta mobile untuk ditinjau.
6. Setelah desain disetujui, lanjutkan ke 3D hero, halaman detail proyek, dan optimasi.

## Untuk Codex Cloud

Buat repository GitHub baru khusus portofolio, upload isi folder ini, lalu hubungkan repository tersebut ke lingkungan Codex Cloud. Paket ini **belum diupload ke GitHub** dan **belum dikirim otomatis ke sesi Codex**.

## File penting

- `AGENTS.md` — aturan kerja untuk agen coding.
- `CODEX_START_PROMPT.md` — pesan mulai yang siap disalin.
- `docs/01-PRODUCT-AND-UX.md` — tujuan, audiens, positioning, dan kriteria keberhasilan.
- `docs/02-VISUAL-SYSTEM.md` — warna, tipografi, layout, fotografi, dan kualitas visual.
- `docs/03-INFORMATION-ARCHITECTURE.md` — urutan halaman & alur navigasi.
- `docs/04-CONTENT-AND-EVIDENCE.md` — peta pengalaman & kejujuran klaim.
- `docs/05-3D-AND-MOTION.md` — spesifikasi objek 3D & aksesibilitas.
- `docs/06-IMPLEMENTATION-AND-QA.md` — tahapan teknis serta checklist.
- `content/projects.json` — seed data yang belum boleh dianggap final.
- `design/tokens.css` — warna/ukuran dasar untuk dipakai di aplikasi.
- `reference/v1-prototype.html` — prototipe lama, *reference only*. Bukan kode produksi.
- `reference/reference-video-A.mp4` & `reference/reference-video-B.mp4` — dua sumber gaya awal.
- `assets/README.md` — daftar materi asli yang belum tersedia.

## North star

> **Impressive at first sight. Clear at every scroll.**

Dalam beberapa detik pertama, pengunjung perlu langsung menangkap tiga hal: siapa Prawira, kompetensi apa yang ditawarkan, dan di mana mereka dapat melihat hasil kerja. Kejelasan ini lebih penting daripada banyaknya animasi.

## Larangan

Jangan mengarang foto, sertifikat, tautan, angka performa, durasi/tanggal rinci, hasil lomba, atau status pekerjaan. Komponen sementara harus jelas sebagai *placeholder*. Jangan menjadikan website seperti dashboard, situs game, atau galeri efek yang mengorbankan keterbacaan.
