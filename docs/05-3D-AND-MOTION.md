# 05 — 3D Object & Motion Specification

## Signature 3D element
One premium digital ID card placed on the hero's right side. This is **the** hero effect; other sections do not need 3D canvas scenes.

### Visual
- Aspect: portrait card roughly 0.68–0.75 width/height (not a thin phone screen).
- Dark graphite semi-opaque/glass material; blue edge lighting, soft roughness, rounded 18–24px corners.
- One miniature profile portrait inside if real user asset supplied; until then initials/avatar placeholder labeled as such.
- Floating in empty dark space; subtle believable shadow. No lanyard required unless it improves the composition, and avoid extra HUD rings.
- Content: short display name and professional role, not many tiny interface labels.

### Animation
- Float amplitude approx 5–10px on a slow 5–7s loop, provided `prefers-reduced-motion: no-preference`.
- Mouse tilt bounded at approximately ±6–8 degrees, ease/spring damped. On touch do not track pointer/gyro.
- Hover may produce one subtle specular shift; no spin/flip auto animation.
- Optional click to flip only if back side contains useful or well-crafted content AND keyboard/touch affordance is clear. Otherwise omit the flip.
- Entry opacity + translate short and once, never delaying hero text.

### Implementation phases
- Phase 1: static or CSS-depth prototype to approve hierarchy and layout.
- Phase 2: React Three Fiber + Drei, scene lazy-load. Provide fallback `picture`/SVG/CSS render while loading or when WebGL unavailable.
- Keep Three.js client side; reserve layout footprint to prevent cumulative layout shift.
- Avoid high polygon counts, heavy transmission/refraction effects and expensive postprocessing. Prefer a few meshes/materials and compressed texture if any.

## Other motion
- Nav active indicator and background state: 180–250ms.
- CTA and card hover: 180–300ms ease-out.
- Scroll reveal: 400–600ms, 8–18px translate, once per session/entry; disable for reduced motion.
- About portrait reveal: one slow mask/opacity introduction; must remain readable even if observers fail.
- Do not pin the viewport or hijack scroll; avoid user-controlled progression with huge blank sections.

## Accessibility
- Provide an accessible concise description near decorative canvas or mark canvas `aria-hidden` and preserve full textual content in normal HTML.
- Keyboard focus ring always visible. Every actual button must do something; interactive-looking decoration cannot be a fake control.
- No hover-only navigation; ensure the 3D card is not an obstacle on touch devices.
