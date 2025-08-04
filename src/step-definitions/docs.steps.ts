// src/step-definitions/docs.steps.ts
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

const { When, Then } = createBdd();

When('I click on the Docs link', async ({ page }) => {
  const home = new HomePage(page);
  await home.clickDocsLink();
});

Then('I should see the docs content', async ({ page }) => {
  const docs = new DocsPage(page);
  await docs.isDocsContentVisible();
});
