import { chromium } from "@playwright/test";
import fs from "node:fs";
const base = process.env.PORTFOLIO_TEST_URL ?? "http://localhost:3002";
fs.mkdirSync("work/v7-video", { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH ?? "/usr/bin/chromium",
  args: [
    "--no-sandbox",
    "--enable-unsafe-swiftshader",
    "--use-gl=angle",
    "--use-angle=swiftshader",
  ],
});
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
  recordVideo: { dir: "work/v7-video", size: { width: 1280, height: 800 } },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
async function glideTo(selector, offset = 88, steps = 28) {
  const top = await page
    .locator(selector)
    .evaluate((el) => el.getBoundingClientRect().top + scrollY);
  const start = await page.evaluate(() => scrollY);
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, (top - offset - start) / steps);
    await page.waitForTimeout(45);
  }
  await page.waitForTimeout(250);
}
await page.goto(base, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await glideTo("#identity");
await page.waitForSelector('[data-renderer="webgl"]', { timeout: 30000 });
await page.waitForTimeout(1200);
await page.mouse.move(1100, 360, { steps: 12 });
await page.waitForTimeout(700);
await page.mouse.move(860, 250, { steps: 12 });
await page.waitForTimeout(700);
await glideTo("#work");
await page.waitForTimeout(900);
await glideTo(".project-card:first-child", 140, 20);
await page.mouse.move(780, 410, { steps: 12 });
await page.waitForTimeout(900);
await glideTo(".project-position-1", 120, 26);
await page.waitForTimeout(550);
await glideTo(".project-position-3", 120, 26);
await page.waitForTimeout(550);
await glideTo("#about", 88, 30);
await page.waitForTimeout(1100);
const recording = page.video();
await context.close();
const path = await recording.path();
fs.copyFileSync(path, "work/v7-video/actual-build.webm");
await browser.close();
if (errors.length) throw Error(errors.join("\n"));
console.log("Actual browser recording: work/v7-video/actual-build.webm");
