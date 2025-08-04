import { expect, Page } from '@playwright/test';

export class ApiNavigationPage {
  constructor(private readonly page: Page) {}

  async gotoHomepage() {
    const appUrl = process.env.APP_URL;
    if (!appUrl) {
      throw new Error('APP_URL is not defined in environment variables.');
    }
    await this.page.goto(appUrl);
  }

  async navigateToVariousApiSections() {
    await this.page.getByRole('link', { name: 'API' }).click();
    await this.page.waitForURL('**/api/**');
    await this.scrollToBottom();

    await this.page.getByRole('link', { name: 'APIResponse', exact: true }).click();
    await this.scrollToBottom();

    await this.page
      .getByLabel('Docs sidebar')
      .getByRole('link', { name: 'APIRequest', exact: true })
      .click();
    await this.scrollToBottom();

    await this.page
      .getByLabel('Docs sidebar')
      .getByRole('link', { name: 'APIRequestContext' })
      .click();
    await this.scrollToBottom();

    await this.page.getByRole('link', { name: 'Playwright Library' }).click();

    const heading = this.page.getByRole('heading', { name: 'Playwright Library' });
    await expect(heading).toBeVisible({ timeout: 10000 });

    await this.scrollToBottom();
  }

  async verifyPropertiesExist(properties: string[]) {
    for (const prop of properties) {
      const locator = this.page.locator(`text=${prop}`);
      await expect(locator.first()).toBeVisible();
    }
  }

  private async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(500);
  }
}