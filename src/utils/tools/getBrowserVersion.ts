import { Page } from '@playwright/test';

export async function getBrowserVersion(page: Page): Promise<string> {
  const version = await page.context().browser().version();
  return version;
}
