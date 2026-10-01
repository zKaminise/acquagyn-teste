import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: false,
  workers: 2,
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'webkit', testMatch: /cross-browser\.spec\.ts/, use: { browserName: 'webkit' } },
    { name: 'firefox', testMatch: /cross-browser\.spec\.ts/, use: { browserName: 'firefox' } },
  ],
  reporter: [['list'], ['json', { outputFile: 'docs/qa/results.json' }]],
  use: {
    baseURL: 'http://127.0.0.1:4322',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'node scripts/serve-build.mjs',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: true,
    timeout: 20000,
  },
});
