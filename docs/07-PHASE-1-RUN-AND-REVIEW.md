# Tahap 1 — Design Foundation

Implementasi Next.js App Router + TypeScript pada root proyek. Dokumen, content JSON, tokens, dan referensi handoff dipertahankan. Prototipe lama hanya menjadi referensi.

## Menjalankan

Node.js >=20.9. Instalasi bersih: `npm ci`. Jika direktori cache bawaan dibatasi, gunakan `npm ci --cache /workspace/work/npm-cache`.

- Development: `npm run dev`
- Validasi: `npm run lint` dan `npm run build`
- Preview produksi setelah build: `npm start` → http://localhost:3000

Font Inter dan Space Grotesk di-host lokal di public/fonts; lisensi disertakan. Tidak ada permintaan Google Fonts saat rendering.

## Struktur

- app/: homepage, layout, metadata, 404, dan projects/[slug]
- components/: navbar, identity card, section, project card/visual, ikon SVG
- lib/projects.ts: pembacaan data dan label presentasi
- content/: sumber proyek/pengalaman asli, belum diverifikasi dokumen
- design/tokens.css: token kanonis, dipakai oleh globals.css

Empat flagship muncul di homepage. Empat proyek tambahan tersedia melalui disclosure “Proyek lainnya”. Delapan route case study dihasilkan secara statis. Case study hanya memuat fakta tercatat dan kebutuhan bukti, tanpa masalah/proses/hasil rekaan.

## Pemeriksaan

Build produksi dan ESLint lulus. Chromium/Playwright memeriksa viewport 1440, 1280, 1024, 768, 390, 360 px, route delapan proyek dan 404, mobile menu (Escape, close on selection), reduced motion, keyboard skip link, rendering dan menu native tanpa JavaScript. Tidak ditemukan horizontal overflow atau page error dalam skenario tersebut. Screenshot desktop/mobile ditinjau secara visual. Ini bukan audit WCAG/Lighthouse penuh dan bukan tes pada perangkat fisik.

Perintah QA sesi: `node scripts/qa.mjs` (server localhost:3000 harus berjalan, Chromium tersedia di /usr/bin/chromium). Script pemeriksaan tersedia di scripts/qa.mjs; cache berada di work/ dan tidak diunggah.

## Keputusan desain dan batas Tahap 1

Hero editorial dua kolom; kartu identitas statis dengan kedalaman CSS dan SVG. Tidak ada WebGL atau React Three Fiber. About menyediakan frame portrait besar, cahaya biru lembut, serta label placeholder. Hover/transisi ringan dan reduced-motion fallback. Semua konten utama dirender di server dan tetap tersedia tanpa JS; navbar active state membutuhkan JS, navigasi dasarnya tidak.

Tidak ada deploy. Metadata noindex dipasang selama konten masih draft; tinjau sebelum peluncuran publik.

## Perlu ditinjau pemilik

1. Hierarki hero, ukuran kartu, dan ritme ruang desktop/mobile.
2. Foto personal asli untuk hero/About, screenshot/desain asli untuk empat proyek, dan sertifikat.
3. Nama unit Komdigi, periode, rincian peran pribadi/tim, status resmi KMI Expo, dan hubungan Rumah Daging Kediri dengan bootcamp.
4. Email, tautan profesional, dan URL proyek terverifikasi. Bagian kontak saat ini menampilkan status belum tersedia tanpa tombol palsu.
5. Persetujuan desain Tahap 1 sebelum animasi 3D kompleks.
