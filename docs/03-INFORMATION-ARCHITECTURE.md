# 03 — Information Architecture & Screen Narrative

## Top navbar
Logo `PRAWIRA.` returns Home. Menu: `Karya`, `Tentang`, `Keahlian`, `Pengalaman`, `Kontak`. On small screens collapse into accessible menu button, close after selection, proper focus management. On desktop use pill-nav with active section indicator. Nav becomes graphite/blurred when scroll; remain readable.

## Homepage order: WHY THIS ORDER
1. **Hero / Who**: nama, profesi utama, secondary skill, CTA `Lihat Proyek`; 3D card supports recognition.
2. **Selected Works / Proof**: 4 best outputs displayed early; no ambiguous category-only tiles.
3. **About / Connection**: large real portrait; short personal introduction & education, not a second CV.
4. **Expertise / Capabilities**: 3 areas: Social Media & Content Design, Graphic Design, AI-Assisted Website Creation. Show supporting project tags and real tools only when known.
5. **Journey / Credibility**: professional experience, learning, competition, KKN, certificates. Dates shown only when confirmed; duration if known.
6. **Contact / Action**: concise closing statement + real email/pro links when provided. Until then show disabled/unconfigured contact text, not `mailto:hello@example.com`.

## Hero wireframe
```
┌──────────────────────────────────────────────────────────────────────────────┐
│ PRAWIRA.                     Karya   Tentang   Keahlian   Pengalaman   Kontak │
│                                                                              │
│ SOCIAL MEDIA • GRAPHIC DESIGN • WEB CREATION                                │
│                                                                              │
│ Prawira Wibawa Hutagalung         [  ONE floating 3D identity card  ]       │
│ Social Media &                   [  subtle light, large focal point ]       │
│ Graphic Designer                 [  restrained perspective / motion  ]      │
│ AI-Assisted Web Creator                                                     │
│                                                                              │
│ Saya membuat konten visual dan website ...                                  │
│ [ Lihat Proyek ↗ ]   [ Tentang Saya ]                                        │
│                                                                              │
│                                            Scroll to explore  ↓             │
└──────────────────────────────────────────────────────────────────────────────┘
```
Mobile: nama, positioning, satu kalimat, CTA, card setelahnya. Avoid horizontal overflow and a fixed 100vh if it clips short devices.

## Featured Works (4)
- `AgriNex — Social Media & Visual Design`: primary social/content. 4 months, contribution described truthfully.
- `Komdigi — Graphic Design Internship`: Instagram design + banner redesign, 1 month.
- `Desa Sei Rotan — Village Website`: community project in KKN; website build.
- `AgriNex — Business Profile Website`: website project; actual site state to be verified.

Optionally include a subdued `All Projects` link below for Rumah Daging Kediri, Dokter Tekno, KampusRide, and graphic design collection. These must not drown the 4 flagship items.

## About / photo cinematic
Two-column editorial desktop: one large actual portrait, one column text. Alternate visual weight from hero: photo becomes the dominant hero of About. Short content about digital marketing studies and creative/digital interests; avoid duplicate timelines.

## Expertise
3 cards/columns, icons minimal, each: category, concise description, `Related work` link to relevant project. Avoid percent-skill gauges and false tool claims.

## Journey / proof
One readable timeline. Experiences:
- Graphic Design intern — Balai Monitor Spektrum Frekuensi Radio Kelas I Medan (Komdigi context; verify exact institutional naming in final).
- Social Media & Graphic Design — AgriNex, 4 months.
- Participant/finalist through AgriNex — P2MW / KMI Expo. Exact designation verified against certificate.
- Tempat Belajar bootcamp — 3 months.
- Social Media Specialist team assignment — Rumah Daging Kediri — 1 month; clarify relation to bootcamp so dates are not misleading.
- KKN project — Desa Sei Rotan website.
Certificates gallery beneath timeline. Show only original scans when supplied. Avoid fictional years.

## Project detail template `/projects/[slug]`
1. Project hero: original visual, category, context/status, period (if known), role.
2. Background: real context and project needs.
3. Problem / Objective: concise and grounded.
4. My contribution: specifically individual actions, separated from team actions.
5. Process / Execution: only documented steps.
6. Deliverables: design examples, screenshots, URL if verifiable.
7. Outcome: documented deliverables/results; quantified metrics only if evidence exists.
8. Reflection: short legitimate learning.
9. Next/Previous project or back-to-projects.

If no case-study data yet: show only project name/category/known contribution and an honest note `Detail proyek sedang disiapkan`, no invented narrative.

## Internal routes
- `/` — home.
- `/projects/[slug]` — case studies.
- `/projects` — optional work archive if implemented in Phase 3.
- No Insights or Contact page initially.

## Microinteraction rules
- Primary CTA scrolls to `#work`, secondary to `#about`.
- Sticky menu links anchor and indicate active section, with `scroll-margin-top` for header.
- Project thumbnails clickable only if detail route truly exists.
- Avoid hover-dependent functionality; all card actions work on touch/keyboard.
