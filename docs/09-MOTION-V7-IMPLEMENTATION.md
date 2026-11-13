# V7 — Opening sequence / review

## Scope

The current user request limits this iteration to the first three scenes. `MOTION_DIRECTION_V7.md` is the latest motion reference. The later-stage work described in `CODEX_MOTION_PROMPT_V7.md` is deferred; About, Expertise, Journey, Contact retain their existing design/motion. No deployment.

## Audit

V4 already has a working R3F card, data-driven editorial gallery, original-content placeholders, and routes. The initial hero and 3D card compete in the same frame; the hero has no dedicated photographic stage. Card float has no distinct scroll entrance. Work and About have isolated reveal effects, without a continuous transition. The three-column Expertise, timeline, and Contact are calm but mostly static; rebuilding them is outside this iteration.

## Changes

- Hero is full bleed and photo-led in composition. `content/media.json` now has `heroPortrait: null` and `heroPosition: "70% 40%"`. A typographic placeholder explicitly says the real portrait is missing. No fabricated person or landscape. The real photo must be supplied before facial framing and photographic contrast can be evaluated.
- Identity moves into a separate native-flow section. The existing R3F geometry and print remain; the surface adds a restrained physical clearcoat. Entrance uses true model depth/scale/rotation, once, after the visible area passes 20%. Idle float remains about 5 px over 5.5 seconds; pointer variation is bounded to roughly 6°, disabled on coarse pointers.
- The 3D module loads near its stage (250 px prefetch margin); the render loop pauses offscreen and when the document is hidden. Reduced-motion uses demand rendering. HTML/CSS is immediately available while loading, with fallbacks for no JavaScript, unsupported/lost WebGL, or scene failure.
- GSAP/ScrollTrigger controls only the opening sequence: a short photographic mask; title settling; a maximum 22 px desktop / 8 px mobile hero parallax with dimming; a connecting rule; masked Selected Works title; and a directional mask on the first AgriNex stage. No pin, wheel interception, replacement scroller, or timeline that prevents navigation.
- GSAP is scoped and reverted on unmount, route changes, media-query changes, and reduced-motion changes. All content is visible in the server-rendered HTML; if motion modules fail to load, the page still works.
- Existing flagship gallery and project facts remain. Existing About reveal is retained and its previous flagship reveal removed to avoid two effects competing on the first project.

## Running

`npm ci`, `npm run dev`, then open localhost:3000 on the same machine. If already running, stop with Ctrl+C before pulling changes. `npm run lint`; `npm run build`.

Browser QA: `node scripts/qa-v7.mjs`, default URL localhost:3002. Set PORTFOLIO_TEST_URL and CHROMIUM_PATH for another local URL/browser path. The script checks six viewports, above-fold CTA, overflow at all three stages, real scroll-linked behavior, keyboard/touch navigation, project routes, reduced motion, 4× CPU emulation, no-JS/no-WebGL/context loss, and initial CLS session windows.

Actual build recording: `node scripts/capture-v7-video.mjs`, then convert work/v7-video/actual-build.webm to MP4 with ffmpeg. This records normal wheel scrolling and real 3D, not synthesized animation frames. The recording also reaches the existing About to show continuity; it does not imply that lower sections were redesigned.

## Evaluation limits / missing assets

Portrait photograph and hero crop require owner assets. Project art/screenshots, certificates, and verified contact/project URLs are still missing. No content claims or metrics have been added.

Headless Chromium with a software WebGL renderer and 4× CPU throttling is a functional simulation, not physical-phone GPU/FPS validation. CLS numbers describe the sampled initial page-load windows, not a field Core Web Vitals score. Final photographic art direction needs review once the real photo exists.

## Validation results

Build and lint passed. Chromium passed 1440×900, 1280×800, 1024×900, 768×1024, 390×844, and 360×780 without horizontal overflow in Hero, Identity, and Work. Hero CTA stayed above the fold. Initial measured CLS was 0 in each sampled page-load window.

Scroll-linked parallax/dimming was verified at runtime; keyboard skip-link focus, touch menu/navigation, eight project routes/404, live reduced-motion changes, no JavaScript, WebGL disabled/lost, and a 4× CPU functional check passed. No page errors were captured in the main test flow. A real skip-link focus defect was corrected by making main focusable; the 3D entrance trigger was also moved to 20% stage visibility so it would not complete prematurely below the fold.

Playwright's video encoder can be installed locally using `npx playwright install ffmpeg`. The session used `PLAYWRIGHT_BROWSERS_PATH=/workspace/work/playwright` so no files were written to the home directory.
