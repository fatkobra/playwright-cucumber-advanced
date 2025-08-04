import { Page } from '@playwright/test';

export async function getBrowserVersion(page: Page): Promise<string> {
  const browser = page.context().browser();
  if (!browser) {
    throw new Error('Unable to retrieve browser instance from context.');
  }

  return browser.version();
}
