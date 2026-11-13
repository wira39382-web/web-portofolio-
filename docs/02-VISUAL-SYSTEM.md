# 02 — Visual System (Final Direction V3)

## Konsep
**Modern Dark Digital Portfolio** — dark editorial, blue accent, cinematic personal portrait, single 3D identity object. Perasaan yang dituju: tenang, presisi, premium, memikat, bukan neon gaming/tech dashboard.

## Warna
- `#0B1220` Midnight Navy — 70% visual baseline, background utama.
- `#151F30` Graphite — surface dan perbedaan section.
- `#3B82F6` Electric Blue — CTA utama, focus/active state, detail pendek.
- `#8AB4F8` Soft Blue — metadata dan edge light selektif.
- `#F1F5F9` Cloud White — heading/body utama di dark.
- `#94A3B8` Slate Gray — teks sekunder; cek kontras untuk teks kecil.
- Border: `rgba(148,163,184,.18)`; subtle, tidak membuat seluruh bagian seperti kartu dashboard.

Rasio 70/20/10 adalah guideline visual, bukan persentase pixel yang harus dipaksakan. Jangan menyebarkan electric blue ke setiap kata atau ikon.

## Tipografi
- Heading: Space Grotesk (fallback sans-serif), bold/semi-bold, tracking ketat terkendali.
- Body: Inter (fallback sans-serif), 16–18px desktop, line-height 1.55–1.7.
- H1 desktop `clamp(2.7rem, 4.6vw, 5.2rem)`; mobile 2.4–3.3rem. Pastikan nama panjang tidak overflow.
- H2 section desktop 2.3–3.8rem; mobile 2–2.6rem.
- Eyebrow 11–13px, tracking lebar, secukupnya; tidak semua paragraf uppercase.
- Hierarki: satu H1 per halaman, satu top line/profesi yang jelas, H2 untuk section.

## Grid & Spacing
- Container max 1240px, padding 24px mobile / 40px tablet / 64px desktop sesuai lebar layar.
- Desktop hero 12-col: teks ~7 cols, objek 3D ~5 cols. Hero memiliki breathing room; tidak memaksa konten penuh viewport pada perangkat pendek.
- Mobile: copy lebih dulu, objek kartu setelah copy; CTA tampak tanpa terhalang kartu.
- Section padding target desktop 96–120px; mobile 64–80px.
- Cards radius 16–22px; tombol radius 10–12px; nav pill boleh lebih bulat jika rapi.
- Section berbeda melalui komposisi dan cahaya ringan, bukan setiap area diberi gradient besar.

## Hero art
- Single ID card with dark semi-translucent material, thin blue edge detail, subtle silver highlights.
- Isi minimal: nama singkat/initial, peran, area foto placeholder, detail ID dekoratif.
- Hindari terlalu banyak label kecil pada kartu. Kartu jangan diperlakukan sebagai CV.
- Teks dan CTA **memiliki prioritas visual lebih tinggi** daripada background motion.

## Foto personal
- About: foto pribadi asli, setengah badan, dengan background removed/cutout jika kualitas memungkinkan.
- Komposisi: foto 35–45% lebar section desktop, frame/crop editorial, blue rim-light lembut di belakang, tidak diberi glow neon.
- Jangan mengubah wajah pengguna atau menciptakan model fiktif yang terlihat seperti foto asli.
- Sampai aset tersedia: placeholder netral yang tertulis `Foto personal akan ditambahkan`.

## Project visuals
- Layout editorial 2 kolom desktop, 1 kolom mobile. Kartu gambar dominan, judul serta peran terbaca.
- Featured 01 (AgriNex Social): bisa memiliki sedikit bobot visual lebih besar dari kartu lain.
- Foto/mockup karya asli menjadi fokus, bukan poster dekoratif buatan template.
- Jika aset belum ada, placeholder dengan identitas proyek dan label `Preview belum tersedia`, bukan screenshot AI yang tampak nyata.
- Hover lift maksimal 4–6px, zoom gambar 1.02–1.04; tidak membuat thumbnail terus bergerak.

## Background dynamics
- Background midnight navy, ambient spot blue di hero, subtle vignette, mungkin 1 motif garis halus.
- About lebih editorial/photographic; Selected Work memakai graphite yang tenang.
- Gunakan whitespace untuk mengatur ritme antara bagian kaya visual vs baca.

## Visual anti-pattern
No glowing dashboard panels, robotic mascots, giant scrolling marquees, fake stat counters, dizzying scroll 3D, infinite text loop, loud glitch transitions, multi-layer particles, perpetual animated gradients, autoplay audio, preloader panjang.
