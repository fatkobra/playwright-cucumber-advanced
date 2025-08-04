import { Page } from '@playwright/test';

export class ThemePage {
  constructor(public readonly page: Page) {}

  async goto() {
    const appUrl = process.env.APP_URL;
    if (!appUrl) {
      throw new Error('APP_URL is not defined in environment variables.');
    }
    await this.page.goto(appUrl);
  }

  async getTheme(): Promise<'light' | 'dark'> {
    return await this.page.evaluate(() =>
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  }

  async toggleTheme(times: number = 1) {
    const toggle = this.page.getByLabel('Switch between dark and light');
    for (let i = 0; i < times; i++) {
      await toggle.click();
      await this.page.waitForTimeout(300); // allow UI to update
    }
  }
}