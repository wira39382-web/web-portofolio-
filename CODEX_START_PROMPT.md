# PROMPT UNTUK CODEX — MULAI PROYEK

Saya ingin kamu membangun website personal portfolio Prawira Wibawa Hutagalung di folder ini. **Sebelum menulis kode, baca `AGENTS.md` dan seluruh file di `docs/`, `content/projects.json`, `design/tokens.css`, serta lihat referensi visual di `reference/`.**

Tujuan inti: website yang membuat pengunjung terkesan sekaligus langsung memahami kompetensi saya. Ini harus menjadi portfolio profesional digital, bukan dashboard, landing page penuh efek, atau demo Three.js.

**Positioning yang harus terbaca pada layar awal:**
- Prawira Wibawa Hutagalung
- Social Media & Graphic Designer
- AI-Assisted Web Creator
- Menyusun konten visual, mengelola media sosial, dan membuat website dengan dukungan AI.

**Visual:** dark midnight navy `#0B1220`, graphite `#151F30`, electric blue `#3B82F6`, soft blue `#8AB4F8`; tipografi Space Grotesk (heading) dan Inter (body); layout editorial yang lapang. Hero dua kolom: copy jelas di kiri dan satu 3D identity card sebagai elemen signature di kanan. About menggunakan satu portrait foto asli sinematik ukuran besar, tetapi file belum tersedia—gunakan placeholder jujur dengan desain yang tetap indah. Project thumbnails juga placeholder, bukan karya yang diklaim nyata.

**Laksanakan Tahap 1 SEKARANG:**
1. Inisialisasi Next.js App Router + TypeScript, styling modern dan komponen reusable pada root folder ini; pertahankan semua dokumen dan referensi.
2. Buat homepage responsive dengan urutan: Hero → Selected Works → About → Expertise → Journey & Certificates → Contact.
3. Buat navbar sticky transparan/solid saat scroll, active link, mobile navigation aksesibel.
4. Buat kartu identitas pseudo-3D CSS atau model statis sementara agar arah layout dapat dinilai tanpa bergantung pada WebGL. Integrasi React Three Fiber adalah Tahap 2 setelah desain disetujui.
5. Buat 4 kartu Featured Works: AgriNex Social Media, Komdigi Graphic Design, Desa Sei Rotan Website, AgriNex Company Profile Website. Pertahankan data/placeholder yang jujur. Proyek lainnya dapat muncul di All Projects.
6. Gunakan data dari `content/projects.json`, jangan menciptakan pencapaian dan metrik.
7. Susun `projects/[slug]` template minimal untuk case study; tampilkan status materi belum lengkap tanpa membuat narasi palsu.
8. Pastikan layout desktop dan mobile rapi, CTA nyata berfungsi, tidak ada horizontal overflow, motion ringan, dan fallback saat reduced-motion.
9. Jalankan aplikasi, lint/build bila memungkinkan, tampilkan ringkasan implementasi serta preview screenshot desktop/mobile, dan laporkan kekurangan yang harus ditinjau.

**Tolong JANGAN melanjutkan ke tahap animasi 3D kompleks, deploy, atau mengisi klaim proyek sebelum saya meninjau hasil Tahap 1.** Buat komposisi yang benar-benar rapi dan profesional terlebih dahulu. Hindari UI generik template dan gunakan keputusan yang sudah ditetapkan dalam dokumentasi.
