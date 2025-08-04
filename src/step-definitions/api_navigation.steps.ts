import { createBdd } from 'playwright-bdd';
import { ApiNavigationPage } from '../pages/ApiNavigationPage';

const { Given, When, Then } = createBdd();

let apiPage: ApiNavigationPage;

Given('I open the Playwright homepage', async ({ page }) => {
  apiPage = new ApiNavigationPage(page);
  await apiPage.gotoHomepage();
});

When('I navigate through various API sections', async () => {
  await apiPage.navigateToVariousApiSections();
});

Then('I should see the chromium, firefox, and webkit properties listed', async () => {
  await apiPage.verifyPropertiesExist(['chromium', 'firefox', 'webkit']);
});