# Prompt untuk Codex — REDESIGN VISUAL V4

Saya kurang puas dengan tampilan sebelumnya: terlalu kaku, generik, dan kurang mencerminkan kualitas visual pada dua video referensi. **Jangan mulai dari template baru dan jangan sekadar mengganti warna atau menambahkan shadow.** Perbaiki art direction, ritme layout, tipografi, pencahayaan, 3D, dan koreografi transisi. Pertahankan informasi dan data proyek yang sudah benar.

Wajib baca `AGENTS.md`, `docs/07-CREATIVE-REDESIGN-V4.md`, dan dua video pada `reference/`. Dokumen V4 menjadi arahan desain visual terbaru jika bertentangan dengan instruksi sebelumnya mengenai penggunaan kartu CSS sementara atau struktur grid yang terlalu seragam. Tetap patuhi akurasi konten, aksesibilitas, dan performa dari instruksi lama.

Sebelum menyunting:
1. Inspeksi website yang sudah ada. Jika bisa, jalankan dan buat screenshot pada 1440x900 dan 390x844.
2. Jelaskan secara spesifik minimal 5 kelemahan visual yang terlihat saat ini (bukan kritik generik).
3. Berikan usulan komposisi visual baru Hero, Selected Works, dan About dengan alasan singkat.

Lakukan sekarang hanya fase **Visual Redesign — Three Signature Scenes**:
- HERO: cinematic dark editorial, nama+profesi+CTA sangat jelas di kiri, satu 3D identity card dengan kedalaman nyata, material elegan, lighting studio lembut dan gerak halus di kanan. Implementasikan R3F jika teknis memungkinkan, serta static fallback yang benar. Hapus icon/kartu dekoratif yang membuatnya tampak seperti dashboard.
- SELECTED WORKS: gallery editorial tidak seragam; AgriNex tampil dominan, dua proyek medium, kemudian satu proyek wide. Jika file karya belum ada, gunakan branded typographic stages berlabel `Aset proyek belum tersedia`, bukan fake screenshots.
- ABOUT: personal photo cinematic section dengan large portrait stage yang **siap menerima foto asli**. Karena foto asli belum ada, jangan gunakan orang fiktif; buat placeholder editorial yang dirancang dengan baik, bukan icon avatar generik.

Perbaiki motion secara selektif: satu signature floating pada hero, scroll reveal terbatas dan natural, hover halus pada proyek, satu masked portrait entrance. Jangan menambah particles/glitch/scroll-jacking.

Gunakan palet dark navy + blue existing, Space Grotesk & Inter. Pertahankan konten faktual, routing, responsiveness, dan accessibility.

Deliverables yang saya harapkan: file website yang benar-benar diperbarui, preview screenshot before/after desktop/mobile, daftar perubahan penting, hasil build/lint bila tersedia, serta catatan aset foto atau karya yang belum tersedia. **Jangan menyebut redesign berhasil tanpa menunjukkan hasil yang bisa saya lihat.**
