import { Page } from '@playwright/test';
import { APP_URL } from '../utils/config';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto(APP_URL);
  }

  async isNavBarVisible(): Promise<boolean> {
    return this.page.locator('nav').isVisible();
  }

  async clickGetStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  async clickDocsLink() {
    await this.page.getByRole('link', { name: 'Docs' }).click();
  }

  async currentUrl(): Promise<string> {
    return this.page.url();
  }
}
