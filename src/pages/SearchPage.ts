import { expect, Page } from '@playwright/test';

export class SearchPage {
  constructor(private readonly page: Page) {}

  async goto() {
    const appUrl = process.env.APP_URL;
    if (!appUrl) {
      throw new Error('APP_URL is not defined in environment variables.');
    }
    await this.page.goto(appUrl);
  }

  async searchFor(term: string) {
    await this.page.getByLabel('Search (Ctrl+K)').click();
    await this.page.getByPlaceholder('Search docs').fill(term);
  }

  async clickFirstSearchResult(term: string) {
    await this.page
      .locator('#docsearch-hits0-item-0')
      .getByRole('link', { name: new RegExp(term, 'i') })
      .click();

    await this.page.waitForLoadState('networkidle');
  }

  // Here the heading is 'Welcome' instead of the search term
  async assertHeadingVisible() {
    const heading = this.page.getByRole('heading', { name: /Welcome/i });
    await expect(heading).toBeVisible();
  }

  async assertUrlMatches(pattern: RegExp) {
    await expect(this.page).toHaveURL(pattern);
  }
}