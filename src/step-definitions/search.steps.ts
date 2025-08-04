import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { SearchPage } from '../pages/SearchPage';

const { Given, When, Then } = createBdd();

let searchPage: SearchPage;


When('I search for {string}', async ({ page }, term) => {
  searchPage = new SearchPage(page);
  await searchPage.searchFor(term);
});

Then('I follow the first search result for {string}', async ({ page }, term) => {
  searchPage = new SearchPage(page);
  await searchPage.clickFirstSearchResult(term);
  await searchPage.assertHeadingVisible();
  // More flexible URL check:
  await searchPage.assertUrlMatches(/\/(docs|community)\//);
});