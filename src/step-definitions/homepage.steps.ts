import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';

const { Given, When, Then } = createBdd();

Given('I navigate to the homepage', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
});

Then('I should see the navigation bar', async ({ page }) => {
  const home = new HomePage(page);
  expect(await home.isNavBarVisible()).toBeTruthy();
});

When('I click on the Get started link', async ({ page }) => {
  const home = new HomePage(page);
  await home.clickGetStarted();
});

Then('I should be on the intro page', async ({ page }) => {
  const home = new HomePage(page);
  await expect(home.currentUrl()).resolves.toContain('intro');
});
