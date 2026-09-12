// With the dev server on port 3105 and output/playwright/ present:
// playwright-cli run-code --filename tests/ad-slot-browser-check.mjs
// All external requests are blocked or fulfilled locally; no real ad impressions.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- Playwright CLI evaluates this function expression.
async (page) => {
  let adRequests = 0;
  let blockedAds = false;
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const mock = `const container = document.getElementById('container-14cdbc51bb49b4b88ce7e76a6511ca87');
    const style = document.createElement('style');
    style.textContent = '.mock-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.mock-card{background:#1e293b;border-radius:6px;padding:12px}.mock-image{height:110px;background:#334155;margin-bottom:12px}@media(max-width:500px){.mock-grid{grid-template-columns:1fr}.mock-image{height:180px}}';
    document.head.append(style);
    container.innerHTML = '<div class="mock-grid">' + [1,2,3,4].map(i => '<div class="mock-card"><div class="mock-image"></div><strong>Test advertisement '+i+'</strong><p>Local layout preview</p></div>').join('') + '</div>';`;
  await page.unroute('**/*');
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith('http://localhost:3105/')) return route.continue();
    if (url.startsWith('https://pl28945033.profitableratecpmnetwork.com/')) {
      adRequests++;
      return blockedAds ? route.abort() : route.fulfill({contentType:'application/javascript', body:mock});
    }
    return route.abort();
  });
  await page.setViewportSize({width:1440, height:1000});
  await page.goto('http://localhost:3105/', {waitUntil:'domcontentloaded'});
  const ad = page.frameLocator('iframe[title="Advertisement"]');
  await ad.getByText('Test advertisement 4').waitFor();
  if (adRequests !== 1) throw new Error('Duplicate initial ad request: '+adRequests);
  await page.screenshot({path:'output/playwright/ad-desktop.png'});
  await page.getByRole('textbox', {name:'GPU model'}).fill('RTX 5090');
  await page.getByRole('button', {name:'Check', exact:true}).click();
  await page.getByText('What to do next', {exact:true}).waitFor();
  if (await page.locator('iframe[title="Advertisement"]').count() !== 1 || adRequests !== 1) throw new Error('GPU search duplicated advertisement');
  await page.getByRole('navigation', {name:'Primary navigation'}).getByRole('link', {name:'Supported GPUs', exact:true}).click();
  await page.waitForURL('**/dlss-5-supported-cards');
  if (await page.locator('iframe[title="Advertisement"]').count()) throw new Error('Advertisement leaked into article');
  await page.getByRole('navigation', {name:'Primary navigation'}).getByRole('link', {name:'Home', exact:true}).click();
  await ad.getByText('Test advertisement 4').waitFor();
  if (adRequests !== 2) throw new Error('Return to homepage request count: '+adRequests);
  await page.setViewportSize({width:390, height:844});
  await page.waitForFunction(() => document.querySelector('iframe[title="Advertisement"]').getBoundingClientRect().height > 900);
  const sizing = await page.locator('iframe[title="Advertisement"]').evaluate(frame => ({frameWidth:frame.clientWidth, height:frame.clientHeight, contentHeight:frame.contentDocument.body.scrollHeight, contentWidth:frame.contentDocument.body.scrollWidth, pageWidth:document.documentElement.scrollWidth, viewport:innerWidth}));
  if (sizing.contentWidth > sizing.frameWidth || sizing.contentHeight > sizing.height || sizing.pageWidth > sizing.viewport) throw new Error('Mobile overflow: '+JSON.stringify(sizing));
  await page.getByRole('complementary', {name:'Advertisement'}).scrollIntoViewIfNeeded();
  await page.screenshot({path:'output/playwright/ad-mobile.png', fullPage:true});
  await page.getByRole('navigation', {name:'Primary navigation'}).getByRole('link', {name:'Português', exact:true}).click();
  await page.waitForURL('**/pt');
  if (await page.locator('iframe[title="Advertisement"]').count() || adRequests !== 2) throw new Error('Advertisement leaked into Portuguese homepage');
  blockedAds = true;
  await page.goto('http://localhost:3105/', {waitUntil:'domcontentloaded'});
  await ad.getByText('Advertisement unavailable.').waitFor();
  await page.getByRole('textbox', {name:'GPU model'}).fill('RTX 5090');
  await page.getByRole('button', {name:'Check', exact:true}).click();
  await page.getByText('What to do next', {exact:true}).waitFor();
  if (errors.length) throw new Error('Page errors: '+JSON.stringify(errors));
  return {passed:true, checks:['single initial request in Strict Mode','GPU search preserves one advertisement','article navigation removes frame','home return reloads once','mobile resize without overflow','Portuguese homepage has no advertisement','blocked-script fallback keeps GPU checker working'], mobile:sizing, realAdvertisingRequests:0, errors};
}
