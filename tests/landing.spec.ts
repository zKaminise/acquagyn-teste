import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const sizes = [
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

for (const size of sizes) {
  test(`layout, images, console and performance at ${size.width}px`, async ({ page }) => {
    await page.setViewportSize(size);
    const errors: string[] = [];
    const failed: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400 && response.url().includes('127.0.0.1'))
        failed.push(response.url());
    });
    await page.addInitScript(() => {
      (window as any).__metrics = { cls: 0, lcp: 0 };
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          if (!entry.hadRecentInput) (window as any).__metrics.cls += entry.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) (window as any).__metrics.lcp = entry.startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    });
    await page.goto('/');
    await page.waitForFunction(() => document.documentElement.classList.contains('has-motion'));
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.hero [data-booking]')).toBeVisible();
    await mkdir('docs/qa', { recursive: true });
    await page.screenshot({ path: `docs/qa/hero-${size.width}.png` });
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += size.height * 0.8) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);
      await page.waitForTimeout(65);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      ).toBeTruthy();
    }
    await page.waitForTimeout(400);
    const broken = await page
      .locator('img')
      .evaluateAll((images) =>
        images
          .filter(
            (image) =>
              !(image as HTMLImageElement).complete ||
              (image as HTMLImageElement).naturalWidth === 0,
          )
          .map((image) => (image as HTMLImageElement).src),
      );
    expect(broken).toEqual([]);
    expect(errors).toEqual([]);
    expect(failed).toEqual([]);
    const metrics = await page.evaluate(() => (window as any).__metrics);
    await writeFile(`docs/qa/metrics-${size.width}.json`, JSON.stringify(metrics, null, 2));
    expect(metrics.cls).toBeLessThan(0.1);
    if ([390, 1440].includes(size.width)) {
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await page.waitForTimeout(1300);
      await page.screenshot({ path: `docs/qa/full-${size.width}.png`, fullPage: true });
    }
  });
}

test('mobile menu: keyboard, Escape, focus and section links', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const open = page.getByRole('button', { name: 'Abrir menu' });
  await open.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(open).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(open).toBeFocused();
  await open.click();
  await page
    .getByRole('navigation', { name: 'Navegação mobile', exact: true })
    .getByRole('link', { name: 'Metodologia' })
    .click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page).toHaveURL(/#metodologia$/);
  await expect(page.locator('body')).not.toHaveClass(/menu-open/);
  const baby = page.locator('.level-step summary').nth(1);
  await baby.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.level-step details').nth(1)).toHaveAttribute('open', '');
});

test('all local links, PDFs, CTAs and SEO', async ({ page, request }) => {
  await page.goto('/');
  const links = await page.locator('a').evaluateAll((anchors) =>
    anchors.map((a) => ({
      href: a.getAttribute('href'),
      target: a.getAttribute('target'),
      rel: a.getAttribute('rel'),
    })),
  );
  for (const link of links) {
    expect(link.href).toBeTruthy();
    if (link.href!.startsWith('#')) expect(await page.locator(link.href!).count()).toBe(1);
    if (link.target === '_blank') expect(link.rel).toContain('noopener');
  }
  const booking = await page
    .locator('[data-booking]')
    .evaluateAll((links) => links.map((a) => (a as HTMLAnchorElement).href));
  expect(booking.length).toBeGreaterThanOrEqual(7);
  for (const url of booking) {
    const link = new URL(url);
    expect(link.hostname).toBe('wa.me');
    expect(link.pathname).toBe('/553432171207');
    expect(link.searchParams.get('text')).toContain('aula experimental');
  }
  await page
    .context()
    .route('https://wa.me/**', (route) =>
      route.fulfill({ body: 'WhatsApp destination verified without sending a message.' }),
    );
  const popupPromise = page.waitForEvent('popup');
  await page.locator('.hero [data-booking]').click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  expect(popup.url()).toContain('wa.me/553432171207');
  await popup.close();
  for (const path of [
    '/robots.txt',
    '/sitemap.xml',
    ...links.filter((l) => l.href!.startsWith('/boletins/')).map((l) => l.href!),
  ])
    expect((await request.get(path)).status()).toBe(200);
  const html = await (await request.get('/')).text();
  expect(html).toContain('lang="pt-BR"');
  expect(html).toContain('Educação e saúde');
  await expect(page).toHaveTitle(/Acquagyn.*Uberlândia/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.acquagyn.com.br/',
  );
  expect(await page.locator('meta[name="description"]').getAttribute('content')).toContain(
    'Desde 1994',
  );
  for (const property of ['og:title', 'og:description', 'og:type', 'og:url'])
    expect(await page.locator(`meta[property="${property}"]`).count()).toBe(1);
  const schema = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent())!,
  );
  expect(schema['@type']).toBe('LocalBusiness');
  expect(schema.telephone).toBe('+553432171207');
});

for (const width of [360, 1440])
  test(`reduced motion and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    expect((await page.locator('html').getAttribute('class')) || '').not.toContain('has-motion');
    expect(
      await page.locator('.hero').evaluate((el) => el.getBoundingClientRect().height),
    ).toBeLessThanOrEqual(950);
    await expect(page.locator('h1')).toHaveCSS('opacity', '1');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    await writeFile(`docs/qa/axe-${width}.json`, JSON.stringify(results.violations, null, 2));
    expect(
      results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  });

test('motion responds to scroll and can be disabled while browsing', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForFunction(() => document.documentElement.classList.contains('has-motion'));
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
  await page.waitForTimeout(1500);
  expect(
    Number(await page.locator('.hero-next').evaluate((el) => getComputedStyle(el).opacity)),
  ).toBeGreaterThan(0.6);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).not.toHaveClass(/has-motion/);
  await expect(page.locator('h1')).toHaveCSS('opacity', '1');
});

test('legacy URLs resolve to the single page', async ({ page }) => {
  for (const [route, anchor] of [
    ['sobre', 'acquagyn'],
    ['servicos', 'modalidades'],
    ['metodologia', 'metodologia'],
    ['niveis', 'metodologia'],
    ['mascotes', 'metodologia'],
    ['contato', 'contato'],
  ]) {
    await page.goto(`/${route}/`);
    await expect(page).toHaveURL(new RegExp(`/#${anchor}$`));
    await expect(page.locator(`#${anchor}`)).toBeAttached();
  }
});

test('content and CTAs work with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.hero [data-booking]')).toBeVisible();
  await expect(page.locator('.level-step')).toHaveCount(8);
  const response = await page.request.get('/');
  expect(await response.text()).toContain('Seu próximo mergulho');
  await context.close();
});

test('film loads on demand, plays and closes accessibly', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const videoRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().endsWith('.mp4')) videoRequests.push(request.url());
  });
  await page.goto('/');
  const film = page.locator('#acquagyn-film');
  expect(await film.getAttribute('src')).toBeNull();
  expect(videoRequests).toHaveLength(0);
  await page.locator('.hero-film-link').click();
  await expect(page.getByRole('dialog', { name: 'Conheça o nosso espaço.' })).toBeVisible();
  await expect
    .poll(() => film.evaluate((video) => (video as HTMLVideoElement).readyState))
    .toBeGreaterThanOrEqual(2);
  expect(await film.evaluate((video) => (video as HTMLVideoElement).duration)).toBeCloseTo(18, 0);
  await expect
    .poll(() => film.evaluate((video) => (video as HTMLVideoElement).currentTime))
    .toBeGreaterThan(0);
  await page.screenshot({ path: 'docs/qa/video-mobile.png' });
  await page.keyboard.press('Escape');
  await expect(page.locator('#school-film')).not.toBeVisible();
  expect(await film.evaluate((video) => (video as HTMLVideoElement).paused)).toBeTruthy();
  await expect(page.locator('.hero-film-link')).toBeFocused();
});

test('gallery advances with scroll and manual reduced motion restores static content', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForFunction(() => document.documentElement.classList.contains('has-motion'));
  const target = await page
    .locator('.pool-reveal')
    .evaluate(
      (el) =>
        el.getBoundingClientRect().top + scrollY + el.getBoundingClientRect().height - innerHeight,
    );
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), target);
  await page.waitForTimeout(1500);
  expect(
    Number(
      await page.locator('.gallery-caption-next').evaluate((el) => getComputedStyle(el).opacity),
    ),
  ).toBeGreaterThan(0.9);
  await page.screenshot({ path: 'docs/qa/gallery-desktop.png' });
  await page.locator('[data-motion-toggle]').click();
  await expect(page.locator('html')).not.toHaveClass(/has-motion/);
  await expect(page.locator('[data-motion-toggle]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.hero h1')).toHaveCSS('opacity', '1');
});

test('visual review of sections and enlarged text', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  for (const section of ['#acquagyn', '#infantil', '#metodologia', '.values', '#contato']) {
    await page.locator(section).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `docs/qa/section-${section.replace(/[#.]/g, '')}.png` });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '200%';
    window.scrollTo(0, 0);
  });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  ).toBeTruthy();
  await expect(page.locator('.hero [data-booking]')).toBeVisible();
  await expect(page.locator('.story-bottom > p')).toHaveCSS('font-size', '32px');
});
