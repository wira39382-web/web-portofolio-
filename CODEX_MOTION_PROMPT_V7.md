# Prompt untuk Codex — Motion Redesign V7

Kita sedang mengembangkan personal portfolio Prawira Wibawa Hutagalung. **Pertahankan pekerjaan yang sudah ada**; jangan reset repo. Jadikan `MOTION_DIRECTION_V7.md` sumber utama arahan animasi, mengatasi petunjuk V1–V6 yang bertentangan. Fokus revisi kali ini adalah fluid cinematic motion, bukan menambah kartu atau efek tanpa tujuan.

Baca proyek saat ini. Audit komponen Hero, 3D Card, Selected Works, About, Expertise, Journey, Contact dan semua animasinya. Identifikasi sumber rasa kaku, termasuk timing, easing, keseragaman layout, pergantian section, dan keterbacaan.

Bangun pengalaman berurutan: (1) personal photographic hero yang langsung menjelaskan identitas, (2) real 3D identity card reveal, (3) transition editorial ke selected works, (4) gallery karya yang interaktif namun tidak mengunci scroll, (5) cinematic personal portrait, (6) expertise & achievement timeline yang tenang, (7) minimal contact.

**Tahapan eksekusi yang diwajibkan:**
1. Audit dan laporkan rencana koreksi komponen, tanpa membongkar semua kode.
2. Implementasikan hanya Hero, 3D Identity, dan transisi Selected Works. Buka preview dan periksa desktop 1440/1280 dan mobile 390/360. Jangan lanjutkan sebelum secara visual tiga bagian ini terasa konsisten dan premium.
3. Implementasikan About, Expertise, Journey dan Contact dengan motion intensitas sedang/rendah.
4. Uji navigation links, focus, touch, reduced-motion, WebGL fallback, CLS, horizontal overflow, dan kinerja perangkat mobile.
5. Berikan ringkasan perubahan, apa yang terlihat dalam preview, serta daftar aset nyata yang masih diperlukan.

**Kualitas visual wajib:** imagery editorial, blue/navy soft lighting, ample negative space, large purposeful typography, meaningful motion choreography, continuity across sections, no copy of reference website's exact designs. Avoid superheroes/masks, HUD, excessive particles/glow, faux metrics, infinite repetitive reveals, forced scroll control, white full-page abrupt inversion. Hero photo Prawira menjadi latar utama (gunakan placeholder aman sampai file asli diberikan); kartu 3D tetap visual signature kedua, bukan saingan foto di frame yang sama.

**Stack:** gunakan teknologi repo bila sudah ada. Jika repo memakai Next.js/React, gunakan React Three Fiber/Drei hanya untuk kartu 3D dan GSAP ScrollTrigger terbatas pada koreografi yang memang butuh scrubbing; CSS transitions untuk microinteractions. Hapus listener/event trigger dengan benar saat unmount. Hindari menambahkan banyak library animasi yang melakukan hal sama.

**Jangan anggap selesai hanya karena build berhasil:** periksa lewat screenshot/video aktual, perbaiki visual, dan tes apakah pengguna langsung memahami kompetensi pemiliknya. Jangan mengarang foto atau karya asli, pengalaman, statistik, kontak, atau metrik proyek.
