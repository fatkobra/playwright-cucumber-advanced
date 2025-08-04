import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { ThemePage } from '../pages/ThemePage';
import { getBrowserVersion } from '../utils/tools/getBrowserVersion';


const { Given, When, Then } = createBdd();

let themePage: ThemePage;
let themeAtStart: 'light' | 'dark';
let themeAfterTwo: 'light' | 'dark';
let themeAfterThree: 'light' | 'dark';

Given('Given I open the homepage for theme testing', async ({ page }) => {
  themePage = new ThemePage(page);
  await themePage.goto();
  themeAtStart = await themePage.getTheme();

  const browserVersion = await getBrowserVersion(page);
  console.log(`[Theme Test] Browser version: ${browserVersion}`);
  
});

When('I toggle the theme three times', async () => {
  await themePage.toggleTheme(2);
  themeAfterTwo = await themePage.getTheme();

  await themePage.toggleTheme(1);
  themeAfterThree = await themePage.getTheme();
});

Then('the theme should change to dark after the second click', () => {
  expect(themeAtStart).toBe('light');
  expect(themeAfterTwo).toBe('light');
});

Then('the theme should return to light after the third click', () => {
  expect(themeAfterThree).toBe('light');
});