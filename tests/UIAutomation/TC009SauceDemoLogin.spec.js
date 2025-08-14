const { test, expect } = require('@playwright/test');

test('SauceDemo Login Page Validation', async ({ page }) => {
  // Step 1: Navigate to saucedemo.com
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter credentials
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Step 3: Validate the login page
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});
