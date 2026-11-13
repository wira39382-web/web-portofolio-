# V4 — Visual Redesign / Three Signature Scenes

Arahan aktif: `07-CREATIVE-REDESIGN-V4.md` dan permintaan pemilik dalam `CODEX_REDESIGN_PROMPT_V4.md`. V4 menggantikan batas kartu CSS sementara dari Tahap 1. Tidak ada deploy.

## Inspeksi sebelum menyunting

Screenshot V3 diambil dari aplikasi berjalan pada 1440×900 dan 390×844, disimpan di `output/v4/before/`. Dua video, contact sheets, dan prototipe lama ditinjau sebagai referensi komposisi, bukan aset website.

Temuan spesifik: kartu hero seperti ID datar dengan kedalaman semu; jarak blok teks hero hampir seragam; empat preview karya memiliki ukuran/monogram/warna yang sama; About berupa kotak berbingkai dengan monogram di tengah; ritme section mengulang pola judul–deskripsi–grid.

## Implementasi

- Hero: nama depan berskala besar, nama lengkap tetap jelas, profesi/CTA di kiri. Stage kanan memuat satu kartu React Three Fiber dengan ExtrudeGeometry ber-bevel, material metal/polycarbonate gelap, environment studio prosedural, dan texture tipografi memakai font lokal. Tidak ada model/tekstur pihak ketiga atau HDR unduhan.
- Gerak: float kecil sekitar 5–6 px/5,5 detik, tilt pointer maksimal sekitar 7° pada sumbu Y; gerak pointer tidak diterapkan pada touch. Render berhenti ketika stage keluar viewport; reduced-motion menggunakan render on demand.
- Fallback: HTML/CSS tampil dari server sebelum JavaScript/3D siap. Kegagalan WebGL, error boundary, atau context loss mengembalikan visual statis. Label STATIC STUDY membedakannya dari 3D. Teks hero tidak berada dalam canvas.
- Selected Works: AgriNex social full-width; Komdigi dan Sei Rotan medium; AgriNex company profile wide. Stage tipografi memakai identitas proyek dan label “Aset proyek belum tersedia”. Tidak ada screenshot produk palsu.
- About: bidang portrait offset, light plane lembut, tipografi vertikal, headline sedikit offset pada desktop. Foto belum tersedia. `content/media.json` menyediakan slot `portrait`; masukkan path file asli di public/ untuk memasang foto/cutout dengan next/image. Pertahankan null sampai foto tersedia.
- Reveal hanya pada flagship pertama dan portrait, masing-masing sekali per mount. Konten selalu visible tanpa observer/JavaScript. Tidak ada particles, glitch, pinned scrolling, atau reveal pada seluruh paragraf.
- Expertise, Journey, Contact dipertahankan sebagai bagian informasi yang tenang. Data pengalaman/proyek dan routing tidak diganti.

## Menjalankan dan memeriksa

Node >=20.9. `npm ci`, `npm run dev`, buka localhost:3000 di komputer yang sama. Tutup dev server sebelum build produksi.

`npm run lint` dan `npm run build` memvalidasi sumber. Untuk browser test gunakan Chromium lokal dan `node scripts/qa-v4.mjs`. Default test URL localhost:3001; override dengan PORTFOLIO_TEST_URL. CHROMIUM_PATH dapat menunjuk executable Chromium Anda. Script screenshot sesi juga disediakan di scripts/capture-v4.mjs.

Screenshot bukan tautan deployment. Lihat galeri `output/v4/README.md` di GitHub untuk evaluasi tanpa menjalankan aplikasi.

## Materi yang tetap belum ada

Foto personal; desain/screenshot proyek asli; sertifikat; URL proyek dan kontak terverifikasi; periode, detail peran pribadi/tim, nama unit magang, status resmi KMI Expo. Tidak ada metrik/hasil tambahan yang dibuat.

Pengujian Chromium headless bukan pengukuran FPS pada perangkat fisik, audit Lighthouse, atau audit WCAG penuh. Integrasi portrait asli dan perubahan bagian lain tetap menunggu evaluasi tiga scene ini.

## Hasil validasi

- `npm run build`: lulus, termasuk TypeScript dan delapan case study statis.
- `npm run lint`: lulus.
- Chromium headless: WebGL aktif, tidak ada page error; lebar 1440/1024/768/390/360 px tanpa horizontal overflow, CTA hero berada dalam viewport awal.
- Hierarki galeri desktop: flagship dan penutup wide terukur lebih lebar daripada dua medium.
- Menu mobile/Escape, delapan route proyek/404, reduced-motion, JavaScript disabled, WebGL disabled, serta context loss: lulus.
- Ringkasan machine-readable: `output/v4/qa-results.json`. Screenshot hero memakai reduced motion untuk frame yang stabil, dengan WebGL tetap aktif.
