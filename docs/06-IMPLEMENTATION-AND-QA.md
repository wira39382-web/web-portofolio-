# 06 — Implementation Roadmap and QA

## Phase 1 — Design & Layout Foundation (do this first)
- Initialize Next.js App Router + TS; clean app structure; CSS tokens.
- Build accessible sticky navbar/mobile menu and mobile-first layouts.
- Hero clear copy + CSS visual placeholder for future 3D ID.
- Work editorial grid (4 flagship cards), About portrait placeholder, Expertise 3 columns, Journey/certificates placeholder, contact links only when real.
- Data-driven content; no lorem ipsum implying experience.
- Configure responsive breakpoints, reduced motion CSS, semantic headings and metadata.
- Run local dev, screenshot/inspect desktop & mobile, fix overflow.
- Stop for visual approval before immersive work.

## Phase 2 — Signature 3D & photography
- Implement R3F hero ID card lazy-load with static fallback.
- Add actual portrait only after owner supplies it; make tasteful masking and soft rim light.
- Polish motion no more than necessary; verify reduced-motion and touch.
- Compare with video references for rhythm and mood, **not** for copying component-for-component.

## Phase 3 — Real content & case studies
- Replace placeholder images with actual project work.
- Build `projects/[slug]` reusable case study template.
- Audit claim evidence, real project links, experience dates/certificates.
- Add secondary work gallery only if enough actual assets exist.

## Phase 4 — Polish, Accessibility & SEO
- Metadata/OpenGraph and social share image based on real brand visual.
- Images optimized; lazy-load below fold, font loading stable, WebGL fallback.
- Mobile, keyboard/focus, screen reader semantics, reduced motion.
- Build/lint checks, Lighthouse audit. Targets (NOT measured facts): accessibility >=90 where feasible, CLS <=0.1, LCP <=2.5s on a realistic mobile test profile. Do not claim thresholds passed without measured reports.
- Verify all contact/external links and legal permissions.

## UX checklist (manual)
- [ ] 5-second test: viewer identifies name and main profession without scrolling.
- [ ] Primary CTA leads directly to Featured Work.
- [ ] Exactly one main visual focal point in hero, one photographic focal point in About.
- [ ] Hero text has enough contrast and never sits beneath a 3D object.
- [ ] Project cards look like a gallery, not dashboard widgets.
- [ ] Main site doesn't depend on WebGL to display name, skills, work.
- [ ] No broken routes, `#` links disguised as functional buttons, or fake emails.
- [ ] A reader can tell academic projects apart from internships/team work.
- [ ] Clear back link from each case study.
- [ ] Browser test widths: 1440, 1280, 1024, 768, 390, 360px; ensure short viewport does not clip.
- [ ] Focus visible; all navigation via keyboard; touch target ideally >=44x44px.
- [ ] No horizontal overflow, text clipping, sticky menu covering anchor targets.
- [ ] Respect `prefers-reduced-motion` and browser back/forward.
- [ ] Alt text for meaningful visuals; decorative objects hidden from accessibility tree.
- [ ] No images/certificates loaded from unrelated stock sources represented as the user's work.

## Suggested project structure after Codex implementation
```
app/
  layout.tsx
  page.tsx
  globals.css
  projects/[slug]/page.tsx
components/
  Navbar.tsx
  Hero.tsx
  IdentityCard.tsx
  FeaturedWork.tsx
  About.tsx
  Expertise.tsx
  Journey.tsx
  Contact.tsx
  ProjectCaseStudy.tsx
content/
  projects.json
public/
  images/  (original assets supplied later)
docs/...
AGENTS.md
```

## Approval gates
1. Approve desktop and mobile hierarchy (Phase 1).
2. Approve 3D card and personal photo integration (Phase 2).
3. Approve actual work/proof and text (Phase 3).
4. Approve performance and quality audit (Phase 4).
