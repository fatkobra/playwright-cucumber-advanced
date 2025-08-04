import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import { APP_URL } from './src/utils/config';

const testDir = defineBddConfig({
  features: 'src/features/*.feature',
  steps: 'src/**/*.ts',
});

export default defineConfig({
  testDir,
  timeout: 40000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 6,
  reporter: [['list'], cucumberReporter('html', {outputFile: 'cucumber-report/index.html'})],
  use: {
    baseURL: APP_URL,
    trace: 'on-first-retry', 
    screenshot: 'on',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        launchOptions: {
          headless: true,
          slowMo: 200
        },
        viewport: {
          height: 2560,
          width: 1440
        },
       },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        launchOptions: {
          headless: true,
          slowMo: 200
        },
        viewport: {
          height: 2560,
          width: 1440
        },
       },
    },
  ],
});
