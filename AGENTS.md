# AGENTS.md — Instructions for Codex

You are building a premium, minimal, responsive personal portfolio for **Prawira Wibawa Hutagalung**. Read and honor all docs in `docs/` before changing code.

## Product priority (strict)
1. Comprehension over spectacle: show the name, role, 3 core skills and a clear 'Lihat Proyek' CTA above the fold.
2. Proof over promises: project work and exact contribution must be discoverable quickly; do not invent performance metrics or professional claims.
3. Elegant restraint: dark navy + electric blue accents, one dominant 3D hero ID card, large portrait in About, no secondary animated 3D scenes.
4. Responsive accessibility and speed: the site must work even when WebGL or JavaScript-heavy animations fail.

## Workflow
- First inspect `docs/`, `content/projects.json`, and `reference/`. `reference/v1-prototype.html` is an old style study, not production source. Neither reference video should be copied verbatim.
- Before implementation, summarize proposed design/system changes and state files you will create. Do not blindly generate 20 competing animations.
- Implement in small reviewable phases. Start with **Phase 1: design system + coherent static/responsive layout**. Provide a working local preview and screenshots at desktop/mobile. Then replace the hero card with performant 3D in Phase 2.
- Use Next.js App Router + TypeScript + Tailwind CSS (or equivalent deliberate CSS architecture). Use React Three Fiber/Drei only for the single hero card. Use GSAP or Motion selectively; never require both just for decorative animations.
- Build data-driven components and `/projects/[slug]` detail page templates. Every external link must be a verified destination, otherwise omit/disable it transparently.
- For photos, certificate scans, project screenshots, and logos, use clearly labeled placeholders until the owner supplies originals. Never synthesize a lookalike portrait.
- Document how to run and test the project. Run lint/build where dependencies are available and report any failures accurately.
- Keep `prefers-reduced-motion`, keyboard navigation, focus rings, semantic landmarks, and touch targets. No scroll-jacking or long preloader.

## UX guardrails
- Navigation: `Karya`, `Tentang`, `Keahlian`, `Pengalaman`, `Kontak` (collapse responsibly on mobile). Logo returns home.
- Hero copy priority: identity > job title > one-sentence explanation > CTA. 3D may not hide these.
- Home sections: Hero → Selected Work → About (portrait) → Expertise → Journey & Certificates → Contact.
- Work is discoverable by the first scroll or a single click on CTA. Use 4 flagship projects in a calm editorial grid.
- Homepage cards explain role and deliverables, not unsupported metrics. No fake 'available for hire' badge, fictitious counts or inactive buttons that appear interactive.
- Default language for main copy is **Bahasa Indonesia** with common professional terms (e.g. Social Media, Graphic Design); no unimplemented language toggle.

## Acceptance criteria
- At 1440, 1024, 768, 390 and 360px widths, no horizontal overflow, clipping or illegible overlays.
- Name, position and CTA are legible without interaction.
- Content remains visible during slow connection, WebGL failure, `prefers-reduced-motion`, and keyboard-only navigation.
- `Lihat Proyek` jumps to actual projects; each real project link routes to a functioning case study or is clearly disabled when not ready.
- All copy must be traceable to project inventory. Distinguish individual vs team roles; academic projects vs professional engagements.
- Respect user-provided dark palette: `#0B1220`, `#151F30`, `#3B82F6`, `#8AB4F8`, `#F1F5F9`, `#94A3B8`.

When in doubt, simplify. Do not optimize for visual novelty at the expense of comprehension.
