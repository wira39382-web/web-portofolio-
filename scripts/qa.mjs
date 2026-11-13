import { chromium } from '@playwright/test';
import fs from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
fs.mkdirSync('output', {recursive:true});
const errors=[]; const checks=[];
const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
for(const width of [1440,1280,1024,768,390,360]){
 await page.setViewportSize({width,height:width>800?1000:844});
 await page.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const dims=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth}));
 if(dims.document>width)throw new Error(`Overflow ${width}: ${JSON.stringify(dims)}`);
 checks.push({width,overflow:false});
 if(width===1440||width===390){await page.screenshot({path:`output/${width===1440?'desktop':'mobile'}-full.png`,fullPage:true});await page.screenshot({path:`output/${width===1440?'desktop':'mobile'}-hero.png`});}
}
await page.setViewportSize({width:390,height:844});
await page.locator('.mobile-nav summary').click();if(!await page.locator('.mobile-nav nav').isVisible())throw Error('Menu not visible');
await page.keyboard.press('Escape');if(await page.locator('.mobile-nav').getAttribute('open')!==null)throw Error('Escape failed');
await page.locator('.mobile-nav summary').click();await page.locator('.mobile-nav a[href="#about"]').click();
await page.waitForTimeout(500);if(await page.locator('.mobile-nav').getAttribute('open')!==null)throw Error('Menu did not close');
await page.locator('#work').scrollIntoViewIfNeeded();await page.locator('.project-link').first().click();await page.waitForURL('**/projects/agrinex-social-media');
if(!await page.getByRole('heading',{name:'Kontribusi tercatat'}).isVisible())throw Error('Case study missing');
await page.getByRole('link',{name:'← Kembali ke karya'}).click();await page.waitForURL('**/#work');
for(const p of JSON.parse(fs.readFileSync('content/projects.json','utf8'))){const response=await page.goto(`http://127.0.0.1:3000/projects/${p.slug}`);if(response.status()!==200)throw Error(`Bad route ${p.slug}`)}
const missing=await page.goto('http://127.0.0.1:3000/projects/does-not-exist');if(missing.status()!==404)throw Error('Missing route is not 404');
await page.emulateMedia({reducedMotion:'reduce'});await page.goto('http://127.0.0.1:3000');const scroll=await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior);if(scroll!=='auto')throw Error('Reduced motion failed');
await page.setViewportSize({width:1440,height:900});await page.goto('http://127.0.0.1:3000');await page.keyboard.press('Tab');if(await page.locator(':focus').textContent()!=='Lewati navigasi')throw Error('Skip link not first');
await page.locator(':focus').evaluate(el=>el.blur());await page.locator('#about').scrollIntoViewIfNeeded();await page.waitForTimeout(200);await page.screenshot({path:'output/desktop-about.png'});
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const fallback=await nojs.newPage();await fallback.goto('http://127.0.0.1:3000');if(!await fallback.getByRole('heading',{level:1}).isVisible())throw Error('No JS hero missing');await fallback.locator('.mobile-nav summary').click();if(!await fallback.locator('.mobile-nav nav').isVisible())throw Error('No JS navigation failed');
if(errors.length)throw Error(errors.join('\n'));
fs.writeFileSync('output/qa-results.json',JSON.stringify({checks,caseStudies:8,notFound:404,mobileMenu:true,reducedMotion:true,keyboardSkipLink:true,noJavaScript:true,pageErrors:errors},null,2));
console.log('PASS: responsive widths, all 8 case studies, 404, mobile menu, reduced motion, keyboard skip link, no-JS fallback, no page errors.');await browser.close();
