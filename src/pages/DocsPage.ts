import { Page, expect } from '@playwright/test';

export class DocsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isDocsContentVisible() {
    await expect(this.page.getByRole('heading', { name: /introduction/i })).toBeVisible();
  }
}

