import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs";
const base = process.env.PORTFOLIO_TEST_URL ?? "http://localhost:3002";
const out = "output/v7";
fs.mkdirSync(`${out}/after`, { recursive: true });
const options = {
  executablePath: process.env.CHROMIUM_PATH ?? "/usr/bin/chromium",
  args: [
    "--no-sandbox",
    "--enable-unsafe-swiftshader",
    "--use-gl=angle",
    "--use-angle=swiftshader",
  ],
};
const browser = await chromium.launch(options);
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.addInitScript(() => {
  window.__shifts = [];
  new PerformanceObserver((list) => {
    for (const e of list.getEntries())
      if (!e.hadRecentInput)
        window.__shifts.push({ value: e.value, time: e.startTime });
  }).observe({ type: "layout-shift", buffered: true });
});
async function scrollTo(selector) {
  await page
    .locator(selector)
    .evaluate((el) =>
      window.scrollTo({
        top: el.getBoundingClientRect().top + scrollY - 88,
        behavior: "instant",
      }),
    );
  await page.waitForTimeout(1000);
}
function cls(entries) {
  let max = 0,
    sum = 0,
    start = 0,
    last = 0;
  for (const e of entries) {
    if (e.time - last > 1000 || e.time - start > 5000) {
      sum = 0;
      start = e.time;
    }
    sum += e.value;
    last = e.time;
    max = Math.max(max, sum);
  }
  return max;
}
const result = {
  viewports: [],
  webgl: false,
  scrollChoreography: false,
  keyboard: false,
  touch: false,
  reducedMotion: false,
  noJavaScript: false,
  noWebGL: false,
  contextLoss: false,
  slowCPU4x: false,
  projectRoutes: 0,
  pageErrors: errors,
};
for (const [width, height] of [
  [1440, 900],
  [1280, 800],
  [1024, 900],
  [768, 1024],
  [390, 844],
  [360, 780],
]) {
  await page.setViewportSize({ width, height });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const initialCLS = cls(await page.evaluate(() => window.__shifts));
  const cta = await page.locator(".hero-actions .primary").boundingBox();
  assert.ok(cta.y + cta.height <= height, "CTA above fold");
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    true,
    `hero overflow ${width}`,
  );
  if (width !== 1024 && width !== 768)
    await page.screenshot({ path: `${out}/after/${width}-hero.png` });
  await scrollTo("#identity");
  await page.waitForSelector('[data-renderer="webgl"]', { timeout: 30000 });
  await page.waitForTimeout(700);
  result.webgl = true;
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    true,
    `identity overflow ${width}`,
  );
  if (width !== 1024 && width !== 768)
    await page.screenshot({ path: `${out}/after/${width}-identity.png` });
  if (width === 1440) {
    const motion = await page
      .locator(".hero-media-parallax")
      .evaluate((el) => ({
        y: new DOMMatrixReadOnly(getComputedStyle(el).transform).m42,
        opacity: +getComputedStyle(el).opacity,
      }));
    assert.ok(motion.y > 0 && motion.y <= 22.1 && motion.opacity < 1);
    result.scrollChoreography = true;
  }
  await scrollTo("#work");
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    true,
    `work overflow ${width}`,
  );
  if (width !== 1024 && width !== 768)
    await page.screenshot({ path: `${out}/after/${width}-work.png` });
  assert.ok(initialCLS < 0.1, `initial CLS ${initialCLS}`);
  result.viewports.push({
    width,
    height,
    initialCLS,
    overflow: false,
    ctaAboveFold: true,
  });
}
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(base, { waitUntil: "networkidle" });
await page.waitForTimeout(1100);
await page.keyboard.press("Tab");
assert.equal(await page.locator(":focus").textContent(), "Lewati navigasi");
await page.keyboard.press("Enter");
assert.equal(await page.locator(":focus").getAttribute("id"), "main");
result.keyboard = true;
await page.locator(".hero-actions .primary").click();
await page.waitForTimeout(1200);
assert.equal(new URL(page.url()).hash, "#work");
assert.ok((await page.locator("#work").boundingBox()).y >= 0);
await page.locator(".project-link").first().click();
await page.waitForURL("**/projects/agrinex-social-media");
await page.getByRole("link", { name: "← Kembali ke karya" }).click();
await page.waitForURL("**/#work");
await page.waitForTimeout(800);
await page.emulateMedia({ reducedMotion: "reduce" });
await page.waitForTimeout(200);
assert.equal(
  await page.evaluate(
    () => getComputedStyle(document.documentElement).scrollBehavior,
  ),
  "auto",
);
assert.equal(
  await page
    .locator(".work-title-line>span")
    .first()
    .evaluate((el) => getComputedStyle(el).transform),
  "none",
);
result.reducedMotion = true;
await scrollTo("#identity");
await page.waitForSelector('[data-renderer="webgl"]');
await page
  .locator(".identity-canvas canvas")
  .evaluate((c) =>
    c.getContext("webgl2").getExtension("WEBGL_lose_context").loseContext(),
  );
await page.waitForSelector('[data-renderer="static"]');
await page.waitForFunction(
  () =>
    getComputedStyle(document.querySelector(".identity-fallback")).opacity ===
    "1",
);
result.contextLoss = true;
for (const p of JSON.parse(fs.readFileSync("content/projects.json", "utf8"))) {
  assert.equal(
    (await page.request.get(`${base}/projects/${p.slug}`)).status(),
    200,
  );
  result.projectRoutes++;
}
assert.equal(
  (await page.request.get(`${base}/projects/not-real`)).status(),
  404,
);
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  hasTouch: true,
  isMobile: true,
});
const touch = await mobile.newPage();
await touch.goto(base, { waitUntil: "networkidle" });
await touch.locator(".mobile-nav summary").tap();
assert.equal(await touch.locator(".mobile-nav nav").isVisible(), true);
await touch.locator('.mobile-nav a[href="#work"]').tap();
await touch.waitForTimeout(1100);
assert.equal(await touch.locator(".mobile-nav").getAttribute("open"), null);
assert.equal(new URL(touch.url()).hash, "#work");
result.touch = true;
const cdp = await mobile.newCDPSession(touch);
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
await touch.goto(base, { waitUntil: "networkidle" });
await touch.waitForTimeout(1600);
assert.equal(await touch.getByRole("heading", { level: 1 }).isVisible(), true);
await touch.locator(".hero-actions .primary").tap();
await touch.waitForTimeout(1500);
assert.equal(new URL(touch.url()).hash, "#work");
result.slowCPU4x = true;
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 1 });
const nojs = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const fallback = await nojs.newPage();
await fallback.goto(base);
assert.equal(
  await fallback.getByRole("heading", { level: 1 }).isVisible(),
  true,
);
await fallback.locator(".mobile-nav summary").click();
assert.equal(await fallback.locator(".mobile-nav nav").isVisible(), true);
await fallback.locator("#identity").evaluate((el) => el.scrollIntoView());
await fallback.screenshot({ path: `${out}/after/390-no-js-identity.png` });
assert.equal(
  await fallback.locator(".v4-identity").getAttribute("data-renderer"),
  "static",
);
result.noJavaScript = true;
await browser.close();
const disabled = await chromium.launch({
  ...options,
  args: ["--no-sandbox", "--disable-webgl"],
});
const staticPage = await disabled.newPage({
  viewport: { width: 1440, height: 900 },
});
await staticPage.goto(base, { waitUntil: "networkidle" });
await staticPage.locator("#identity").evaluate((el) => el.scrollIntoView());
await staticPage.waitForTimeout(1400);
assert.equal(
  await staticPage.locator(".v4-identity").getAttribute("data-renderer"),
  "static",
);
await staticPage.screenshot({ path: `${out}/after/1440-static-fallback.png` });
result.noWebGL = true;
await disabled.close();
assert.equal(errors.length, 0);
fs.writeFileSync(`${out}/qa-results.json`, JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
