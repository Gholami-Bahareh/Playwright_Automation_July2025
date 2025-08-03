import { test, expect } from '@playwright/test';
let baseUrl = 'https://demo.nopcommerce.com/register'
test('Assertion Test', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');
  await expect(page.locator(".page-title")).toBeVisible();
  await expect(page.getByRole("heading",{name: "Register"})).toBeVisible();
});

