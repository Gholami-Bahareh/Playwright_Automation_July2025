import { test, expect } from '@playwright/test';
let baseUrl = 'https://www.dummyticket.com/dummy-ticket-for-visa-application/'
test('CheckBoxes', async ({ page }) => {
  await page.goto(baseUrl,{timeout: 60000 }); 
//   await page.waitForSelector(".navbar-logo-img.navbar-logo-img-mobile", { timeout: 25000 });
  await expect(page.locator(".navbar-logo-img.navbar-logo-img-normal")).toBeVisible();
   await page.locator('#product_550').click();
   await page.locator('#product_3186').click();
   await page.locator('#product_7441').click();
   await page.locator('#product_549').click();
await expect(page.locator('.woocommerce-message')).toBeVisible({ timeout: 15000 });
  await expect(page.locator('.woocommerce-message')).toContainText('"Dummy ticket for Visa Application" added to your order. Complete your order below.')
 
await page.locator('#product_550').click();

  const message1 = page.locator('.woocommerce-message');
  await expect(message1).toBeVisible({ timeout: 15000 });
  await expect(message1).toContainText('"Dummy return ticket" added to your order. Complete your order below.');


 
  

});

