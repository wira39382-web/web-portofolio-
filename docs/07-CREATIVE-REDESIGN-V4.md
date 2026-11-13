# 07 — Creative Redesign Direction V4

## Masalah yang dikoreksi
Versi V3 baik secara struktur tetapi masih terlalu mirip template karena pola grid yang diulang, objek 3D CSS seperti ilustrasi ID biasa, kurang art direction fotografi, placeholder dominan, dan animasi hanya ditetapkan sebagai efek kecil tanpa koreografi. Website tidak boleh terasa seperti SaaS dashboard, gaming UI, atau sekadar kumpulan komponen Tailwind.

## Creative north star
**Cinematic digital craft, editorial clarity.** Pikirkan sebuah visual case study kreatif dengan karakter profesional: satu adegan hero yang memorable, satu adegan portrait yang manusiawi, galeri karya yang berani, kemudian section penjelasan yang tenang.

Jangan menukar kegunaan dengan spektakel. Visual menarik berasal dari hierarki, bentuk, cropping, lighting, dan pacing — bukan banyak efek.

## Art direction — desktop (1440px sebagai baseline)

### Act 01 — Hero / Identitas (focal point: floating ID)
- Hero split editorial sekitar 55/45; tipografi besar dan jelas di kiri, card 3D pada stage berlapis di kanan. Jangan membingkai seluruh hero dalam card.
- Nama: Prawira Wibawa Hutagalung, profesi utama: Social Media & Graphic Designer, keahlian pendukung: AI-Assisted Web Creator. Atur H1 sehingga nama tetap terbaca dan layout tidak menekan card.
- Text treatment: 1 eyebrow pendek, 1 headline jelas (bukan 3 paragraf), 1 kalimat spesifik, 1 CTA solid, 1 CTA teks.
- Stage kanan: backdrop navy gelap, soft elliptical blue spotlight yang terlokalisasi; satu ID card berproporsi nyata dan terasa punya ketebalan. Hanging lanyard opsional jika benar-benar elegan, tidak wajib.
- Kartu: material polycarbonate/glass **subtle**, edge highlight, beveled corners, realistic shadow, restrained specular; tidak menyerupai kartu dashboard datar atau placeholder kartu karyawan dengan banyak teks. Jika tidak ada foto asli, gunakan monogram atau abstract typographic portrait area dengan label placeholder yang jujur; JANGAN synthesize wajah.
- Three.js/React Three Fiber boleh dipakai sekarang pada hero untuk mewujudkan depth nyata, namun scene harus hemat dan punya static fallback.
- Interaction: gentle floating ±6px/5s, mouse tilt maksimal ±7° dengan smoothing. On touch: idle float only. No forced rotation or 360° spin.
- Frame composition: legible on 1440×900 and 390×844. Navbar never overlays headline.

### Act 02 — Selected Work / Credibility (focal point: actual work)
- Jangan membuat 4 kotak identik. Gunakan editorial project gallery: 1 large flagship card (AgriNex social content), 2 medium side-by-side (Komdigi + Sei Rotan), kemudian 1 wide website feature (AgriNex company profile). Card hierarchy dibangun lewat ukuran, crop, dan whitespace.
- Setiap feature menampilkan kategori, nama, satu kalimat kontribusi, CTA ke detail. Tidak ada metrik palsu, tidak ada tile yang hanya menyebut nama.
- Pengguna belum mengirim artwork, screenshots, atau URL. Gunakan art-directed **non-deceptive** placeholders (typography, brand-color stage, label `Aset proyek belum tersedia`) yang dapat diganti dengan karya asli. Jangan membuat screenshot produk palsu lalu menampilkannya sebagai karya nyata.
- Pengaturan warna: predominantly dark dengan beberapa raised graphite surfaces dan pencahayaan berbeda, bukan semua kartu berwarna sama dan berborder jelas.

### Act 03 — About / Personal cinematic reveal (focal point: genuine portrait)
- Besar, mengedepankan karakter manusia. Gunakan komposisi offset / asymmetric image+typography, bukan icon user dalam kotak template.
- Siapkan portrait stage yang siap menerima PNG/WebP cutout asli, namun sebelum foto tersedia tampilkan **clean editorial placeholder** dengan teks `Foto personal akan ditambahkan`, bukan silhouette kartun atau foto orang tak dikenal.
- Foreground portrait bisa overlap tipis ke tipografi/number besar dekoratif yang tidak menghalangi pembacaan. Soft blue rim light dan subtle vignette; tidak pakai glow neon.
- Reveal mask/transforms sekali saat masuk viewport, tidak scroll-jacking atau pinned 200vh.

### Act 04 — Expertise / Calm information
- Tampilan lebih tenang dan tipografis: 3 distinct competencies separated by fine dividers or alternating text/stage. Jika perlu cards, jangan 3 identik dengan ikon besar di atas.
- Social Media & Content Design; Graphic Design; AI-Assisted Website Creation. Berikan link proyek yang relevan. Kurangi ikon dekoratif.

### Act 05 — Journey / Evidence
- Timeline editorial ramping yang konsisten. Sertifikat bisa strip horizontal yang jelas; jangan mengubahnya menjadi dashboard statistik.

### Act 06 — Contact / Closing shot
- Bold typographic closing dengan negative space. Hanya tautan kontak yang telah diverifikasi, bukan tombol palsu atau lorem ipsum.

## Spacing & visual rhythm
- Kontras ritme: Hero dramatic -> Work cinematic gallery -> About portrait-led -> Expertise sparse -> Journey organized -> Contact bold.
- Hindari 6 section dengan H2 centered dan card grid identik. Gunakan alignment yang variatif tetapi baseline grid tetap konsisten.
- Jangan pakai banyak rounded rectangles menjadi komposisi dominan; variasikan container image-to-text.
- Gunakan ruang kosong sebagai framing. Jangan memaksa setiap section tepat 100vh; lebih baik content-led.
- Gradien untuk lighting, bukan dekorasi satu layar penuh. Background texture boleh tipis dan nyaris tak terlihat.
- Palet tetap: #0B1220, #151F30, #3B82F6, #8AB4F8, #F1F5F9, #94A3B8. Jangan memperkenalkan cyan, purple, green neon.

## Motion direction
- Hero float: very gentle, continuous only on ID; respect reduced-motion.
- Scroll reveal: 450–750ms with controlled opacity, translate 12–24px, slight stagger for 2–3 elements max. No effect on every paragraph.
- Featured Work hover: slight elevation (4px), image zoom 1.025, subtle active link reveal. Never cover key title or explanation.
- Between sections, lighting/contrast transitions with CSS, no theatrical fades-to-black or abrupt blank screen.
- About portrait single masked entrance. No glitch, no particles, no loading counter, no animated letter-splitting across every heading.
- Focus states and keyboard affordance remain clear; animation not required to understand content.

## Implementation gates
A) Analyze existing pages; screenshot at 1440×900 and 390×844. List 5 actual design defects before coding. Note if screenshot tooling unavailable.
B) Provide art-directed composition and implement Hero, one sample Featured Work, and About. **Do not build the full site until these three scenes look cohesive.**
C) Make a distinct interactive 3D card with actual depth / lighting (React Three Fiber if feasible). Fallback static image or CSS but fallback cannot be presented as finished 3D.
D) Compare visual snapshots before/after; check readability and no horizontal overflow at 360/390/768/1024/1440.
E) Only then restyle the remaining sections to match, without introducing generic card grids.

## Definition of 'premium' for approval
- Without scrolling, a stranger can identify the person and competency and find the Work CTA.
- Hero feels like an intentional cinematic composition, not a default section template.
- At least one visual feature (3D ID) has believable depth; not just box-shadow + CSS rotation.
- Work gallery has hierarchy and looks more like a design portfolio than SaaS features.
- About portrait area is composed with art direction even before the real photo is delivered.
- On mobile the content is intentionally rearranged rather than merely shrunk.
- No fabricated photos/projects/metrics; missing assets are honestly marked but still aesthetically managed.
