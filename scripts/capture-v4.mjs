import {chromium} from '@playwright/test';
import fs from 'node:fs';
const url=process.env.PORTFOLIO_TEST_URL??'http://localhost:3001';fs.mkdirSync('output/v4/after',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH??'/usr/bin/chromium',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage({reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const [width,height] of [[1440,900],[390,844]]){
 await page.setViewportSize({width,height});await page.goto(url,{waitUntil:'networkidle'});await page.waitForSelector('[data-renderer="webgl"]',{timeout:30000});await page.waitForTimeout(500);
 await page.screenshot({path:`output/v4/after/${width}-hero.png`});await page.screenshot({path:`output/v4/after/${width}-full.png`,fullPage:true});
 await page.locator('.work-grid').screenshot({style:".site-header,.skip-link{visibility:hidden!important}",path:`output/v4/after/${width}-gallery.png`});
 await page.evaluate(()=>window.scrollTo(0,document.querySelector('#about').getBoundingClientRect().top+scrollY-88));await page.waitForTimeout(300);await page.locator("#about").screenshot({style:".site-header,.skip-link{visibility:hidden!important}",path:`output/v4/after/${width}-about.png`});
 await page.evaluate(()=>window.scrollTo(0,document.querySelector('#work').getBoundingClientRect().top+scrollY-88));await page.waitForTimeout(300);await page.screenshot({path:`output/v4/after/${width}-work.png`});
}
await browser.close();if(errors.length)throw Error(errors.join('\n'));console.log('V4 snapshots captured: desktop/mobile hero, full page, gallery, About, work.');
