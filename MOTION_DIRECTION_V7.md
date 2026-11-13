# Prawira Portfolio — Motion Direction V7

## Intent
Modern Dark Cinematic Portfolio. Gerakan bergaya editorial sinematik: fluid, dimensional, intentional, responsive. Visual berani, navigasi sederhana. Pengunjung harus memahami siapa Prawira, keahliannya (Social Media, Graphic Design, AI-Assisted Web Creation), serta proyek unggulannya dalam beberapa detik pertama.

**Referensi input:** video yang disediakan pengguna, durasi sekitar 42.1 detik. Berikut pembacaan adegan berdasarkan observasi urutan frame, bukan spesifikasi teknis website sumber:
- 00–03: lanskap/persona dan transisi perbesaran/penyederhanaan latar; headline masuk.
- 03–12: gelap, topographic texture, portrait reveal dan pergantian ilustratif wajah/karakter.
- 12–20: timeline pendidikan/pengalaman ketika scroll.
- 20–25: folder karya dengan preview berlapis dan interaksi.
- 25–28: tipografi raksasa PORTOFOLIO menjadi transisi ke layar terang.
- 28–34: galeri/kategori proyek, sertifikat/penghargaan, navigasi horizontal.
- 34–37: floating photo collage.
- 37–42: contact form / panel.

Ambil prinsip depth, reveal, continuity, typographic transition, dan interactivity. Jangan salin visual persis, efek superhero, folder spesifik, marquee berulang, atau transisi gelap-ke-putih yang mendadak. Pertahankan palet #0B1220, #151F30, #3B82F6, #8AB4F8, #F1F5F9, #94A3B8.

## Pengalaman utamanya: “From Human to Digital Impact”
Foto pribadi sebagai representasi manusia -> 3D card sebagai identitas digital -> karya sebagai bukti -> perjalanan sebagai kredibilitas -> ajakan kolaborasi.

### Scene 1 — Human First (Home, full-bleed editorial)
- Visual: foto asli Prawira menjadi **latar hero sinematik**, ditempatkan kanan/tengah-kanan. Hindari menutupi wajah dengan heading. Latar dapat berupa foto lingkungan asli atau potret cutout yang dikomposisikan ke atmosfer navy; jangan membuat adegan fiktif yang mengaburkan identitas.
- Alur: selama 0–0.8 dtk, warna dasar dan foto muncul dahulu melalui masked gradient; nama dan posisi profesional hadir dalam 0.3–0.9 dtk sehingga jelas dari awal; CTA langsung terlihat.
- Depth: bergerak 8–22 px maksimal antara background, portrait, dan typography saat scroll awal (bukan auto pan terus-menerus).
- Hero copy minimal: nama, “Social Media · Graphic Design · AI-Assisted Web Creation”, satu kalimat penguat, dan Explore Work.
- Hindari mengecilkan semua teks dengan perspektif atau menggerakkan seluruh halaman sebagai kamera.

### Scene 2 — Digital Identity (3D Card reveal)
- Ketika pengguna mulai scroll, foto perlahan lebih gelap dan lebih tenang; kaca 3D card tampil di area baru **tanpa menumpuk wajah**. Gunakan transisi kekerabatan melalui highlight biru yang bergerak ke permukaan kartu.
- Satu reveal card nyata: masuk dari kedalaman `z`, scale kira-kira 0.86 -> 1, rotasi awal 12–16° -> netral. Boleh satu gerak 700–1000 ms; tidak spin 360°.
- Idle floating kecil ±4–7 px per 5–7 detik; mouse tilt maksimum ±6°, smooth spring; ketika hover, specular light ikut berubah.
- 3D nyata: ketebalan kartu, bevel halus, frame metallic, material frosted glass, ambient/key/rim lighting, shadow kontak sesuai panggung; masih perlu fallback statis.
- Jangan buat scene 3D memblokir teks atau interaksi navigasi; card hanya berada di Hero/Identity stage.

### Scene 3 — The Work Portal (typographic scene transition)
- Heading “Selected Work” berukuran editorial besar hadir melalui clipping / mask, BUKAN seluruh teks zoom sampai memenuhi layar.
- Background bergeser lembut dari midnight navy ke graphite; satu key visual AgriNex muncul lewat image reveal (clip/mask kiri-ke-kanan atau bawah-ke-atas) mengikuti proporsi.
- Transisi menggunakan scroll normal, bukan scroll hijacking. Jika sticky dipakai, batas maksimal untuk satu panggung dan punya fallback mobile.

### Scene 4 — Project Stories (gallery)
- Featured: AgriNex social media/desain (besar) -> Komdigi banner dan konten -> Desa Sei Rotan website -> AgriNex company profile website.
- Komposisi 1 feature besar + 2 smaller editorial + 1 feature detail; hindari empat kotak sama besar atau kartu bergaya SaaS.
- Interaksi: thumbnail `scale 1 -> 1.025`, shadow lembut, pan fokus gambar sangat kecil (200–320ms), ikon panah berubah posisinya. Project card bisa diklik di area yang jelas.
- Slider horizontal hanya jika diperlukan, memiliki panah & swipe dan tidak membajak scroll vertikal. Jika perangkat mobile, gunakan horizontal snap atau grid 1 kolom.
- Setiap kartu jelas: nama proyek, kategori, kontribusi singkat; live/placeholder harus dibedakan.

### Scene 5 — Beyond the Screen (About portrait)
- Gunakan portrait Prawira versi close-up/waist-up, berbeda framing dari Hero. Maksimal satu efek reveal: clip vertical 0->100%, `scale 1.04 -> 1` pada 600–850ms. Parallax lembut maksimal 12px.
- Teks editorial berdampingan, bukan kartu-kartu. Hindari tekstur garis topografi berulang sebagai dekorasi dominan; gunakan pencahayaan lokal.

### Scene 6 — Capabilities & Journey
- Expertise berupa tiga baris besar: Social Media; Graphic Design; AI-Assisted Web Creation. Setiap baris meng-highlight area terpilih saat hover/focus, underline line-grow 180–250ms.
- Timeline pengalaman/achievement tampil via stagger 70–110ms per item dengan pergeseran 12–20 px; garis timeline hanya berprogres pada area yang terlihat.
- Momen foto: 2–3 foto kegiatan nyata P2MW/KMI Expo/Komdigi/AgriNex tampil seperti lembar editorial bertumpuk (perspektif ±2–4°), tidak acak dan tidak mengambang tanpa struktur.
- Sertifikat: galeri horizontal rapi, preview dapat dibuka. Tanpa animasi sertifikat mengorbit.

### Scene 7 — Final Frame (Contact)
- Kembali ke visual dark dengan satu halo cahaya samar; headline “Let's create something meaningful” atau teks Indonesia yang disetujui.
- Penutup beranimasi sederhana: line-reveal pada headline + tombol dengan subtle fill on hover. Jangan ada guestbook palsu atau sosial media palsu.

## Motion Language / Tokens
- Easing micro-interaction: `cubic-bezier(.22,1,.36,1)`; in-out untuk state changes; GSAP power2/power3 jika masuk akal.
- Hover/tap: 180–280ms; image lift 4–8px maksimum; image scale 1.02–1.035.
- Element entrance: 450–700ms, offset 12–28px; stagger 60–110ms.
- Hero entrance: 750–1100ms total, konten penting terlihat sejak awal.
- 3D first reveal: 650–1000ms. Mouse tilt damped, ±6°; idle travel 4–7px.
- Major scene transition: 700–1100ms, hanya pada 2–3 panggung penting.
- Parallax visual: 8–22px untuk hero, <=12px untuk portrait.
- One dominant motion at a time per viewport. Movement density: Hero high -> gallery medium -> expertise low -> journey medium -> contact low.
- Tidak autoplay audio, tidak glitch, tidak smooth-scroll yang mengganti kecepatan scrolling perangkat, tidak progress loader lama, tidak constant floating cards di semua section.

## Motion relevance, not spectacle
| Effect | Intended meaning | Keep? |
|---|---|---|
| Intro portrait reveal | Human identity | Yes |
| Card material + tilt | Digital/creative identity | Yes |
| Oversized editorial title | Section punctuation | Yes, once |
| Project image reveal | Project becomes evidence | Yes |
| Horizontal gallery | Browse related works | Yes, opt-in only |
| Timeline line progress | Career journey | Yes |
| Photo collages | Human collaboration | Yes, curated |
| Superhero face swap | Pure novelty | No |
| Full page white inversion | Breaks dark identity | No |
| Continuous scroll hijack | Blocks access | No |
| Mass parallax particles | Visual clutter | No |

## Responsive / accessible
- Desktop: full bleed cinematic hero with photograph and text contrast; identity card in separate stage. Mobile: no cursor dependencies; reduce parallax; image crop with face-safe `object-position`, content hierarchy Name -> Role -> CTA -> Visual.
- Every meaningful piece of information remains visible when animations are disabled. Use `prefers-reduced-motion` to remove reveal and parallax while keeping content.
- Keyboard focus equivalent to hover; sufficient contrast on photos (gradient overlay / contrast area). No interaction-dependent links or missing icons.
- 3D scene dynamic import lazy, poster image static immediately visible; route transitions accessible; do not induce cumulative layout shift.
- Performance: CSS transform + opacity; avoid animating `top/left/width/height` and massive CSS filters during scroll. Use GSAP/ScrollTrigger sparingly and scope/cleanup instances; do not activate `will-change` everywhere.

## Practical acceptance criteria for Codex
1. On initial load: user reads name, three competencies and Explore Work without scrolling.
2. Hero photograph displays clear head/body framing on desktop/mobile, never covered by CTA or 3D card.
3. One distinct, convincing 3D card moment; movement responds naturally, stops when out of view, static fallback if disabled.
4. Primary project appears promptly and has unmistakable clickable affordance; work is visible without excessive scrolling.
5. Scroll remains native and responsive with no unintentional pin traps, jumpy section transitions, or horizontal overflow.
6. All sections work without JavaScript-driven animation and under `prefers-reduced-motion`.
7. Audit desktop 1440x900, laptop 1280x800, tablet 768x1024, mobile 390x844 and 360x780; test keyboard, reduced motion, and slower devices.
8. Provide a short video capture from actual build showing the hero, card, projects, and portrait transitions; compare against this guide for visual quality, not mimicry.

## Source assets
Only use the user-provided video as inspiration. Real photo Prawira, AgriNex project images, screenshots, certification images require the actual assets; use consistent art-directed placeholders and clearly label them until provided. Do not fabricate results, company claims, or website project metrics.
