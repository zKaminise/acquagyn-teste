import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

for (const viewport of [
  { width: 320, height: 740 },
  { width: 844, height: 390 },
  { width: 1440, height: 900 },
]) {
  test(`navigation and readable content at ${viewport.width}x${viewport.height}`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const logo = page.locator('.site-header .brand img');
    await expect(logo).toHaveCSS('filter', 'none');
    expect(await logo.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBe(528);
    const brand = await page.locator('.site-header .brand').boundingBox();
    const actions = await page.locator('.header-actions').boundingBox();
    expect(brand!.x + brand!.width).toBeLessThanOrEqual(actions!.x);
    if (viewport.width < 901) {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await expect(page.locator('#mobile-menu')).toBeVisible();
      await page
        .locator('#mobile-menu')
        .getByRole('link', { name: 'Contato', exact: true })
        .click();
      await expect(page.locator('#mobile-menu')).not.toBeVisible();
      await expect(page).toHaveURL(/#contato$/);
    }
    for (const id of [
      '#inicio',
      '#modalidades',
      '#metodologia',
      '#estrutura',
      '#duvidas',
      '#contato',
    ]) {
      await page.locator(id).scrollIntoViewIfNeeded();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      ).toBeTruthy();
    }
    const question = page.locator('.questions-list summary').first();
    await question.click();
    await expect(page.locator('.questions-list details').first()).toHaveAttribute('open', '');
    await expect(page.locator('.questions-list details').first().locator('p')).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(page.locator('.questions-list details').first()).not.toHaveAttribute('open', '');
    await page.locator('#metodologia').scrollIntoViewIfNeeded();
    await page.screenshot({
      path: `docs/qa/${testInfo.project.name}-${viewport.width}-methodology.png`,
    });
    expect(errors).toEqual([]);
  });
}

test('search metadata, official brand, social preview and not-found status', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'index, follow, max-image-preview:large',
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'https://www.acquagyn.com.br/images/acquagyn-social.jpg',
  );
  const logo = await request.get('/images/logo.png');
  expect(await logo.body()).toEqual(await readFile('assets/original/logo-official.png'));
  for (const path of ['/images/acquagyn-social.jpg', '/favicon.png', '/apple-touch-icon.png']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toMatch(/^image\//);
  }
  await expect(page.locator('main')).not.toContainText('em confirmação');
  await expect(page.locator('main')).not.toContainText('em atualização');
  const response = await page.goto('/pagina-inexistente-acquagyn');
  expect(response!.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  await expect(page).toHaveTitle(/Página não encontrada/);
});
