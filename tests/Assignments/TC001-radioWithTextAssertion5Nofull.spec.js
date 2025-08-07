import { test, expect } from '@playwright/test';
             
let baseUrl = 'https://www.dummyticket.com/dummy-ticket-for-visa-application/';
test('Radio Button product_549', async ({ page }) => {
  await page.goto(baseUrl);
  const roundTripRadio = page.locator('#product_549');
  await expect(roundTripRadio).toBeVisible();
  await expect(roundTripRadio).toBeEnabled();
  await roundTripRadio.check();
  await page.waitForTimeout(5000);
  await expect(page.locator(".woocommerce-message")).toContainText('"Dummy ticket for Visa Application" added to your order. Complete your order below.');
  
});


test.only('Radio Button product_550', async ({ page }) => {
  await page.goto(baseUrl);
  const roundTripRadio = page.locator('#product_550');
  const roundTripRadio0 = page.locator('#product_549');
  await expect(roundTripRadio).toBeVisible();
  await expect(roundTripRadio).toBeEnabled();
  await roundTripRadio0.check();
  // await page.waitForTimeout(5000);
  await roundTripRadio.check();
  await page.waitForTimeout(5000);
  await expect(page.locator(".woocommerce-message")).toContainText('"Dummy return ticket" added to your order. Complete your order below.');
});

test('Radio Button product_551', async ({ page }) => {
  await page.goto(baseUrl);
  const roundTripRadio = page.locator('input#product_551');
  await expect(roundTripRadio).toBeVisible();
  await expect(roundTripRadio).toBeEnabled();
  await roundTripRadio.check();
  await page.waitForTimeout(5000);
  await expect(page.locator(".woocommerce-message")).toContainText('"Dummy hotel booking" added to your order. Complete your order below.');
});



test('Radio Button product_3186', async ({ page }) => {
  await page.goto(baseUrl);
  const roundTripRadio = page.locator('input#product_3186');
  await expect(roundTripRadio).toBeVisible();
  await expect(roundTripRadio).toBeEnabled();
  await roundTripRadio.check();
  await page.waitForTimeout(5000);
  await expect(page.locator(".woocommerce-message")).toContainText('"Dummy ticket and hotel" added to your order. Complete your order below.');
  });
  
  test('Radio Button product_7441', async ({ page }) => {
  await page.goto(baseUrl);
  const roundTripRadio = page.locator('input#product_7441');
  await expect(roundTripRadio).toBeVisible();
  await expect(roundTripRadio).toBeEnabled();
  await roundTripRadio.check();
  await page.waitForTimeout(5000); 
  await expect(page.locator(".woocommerce-message")).toContainText('"Past dated ticket" added to your order. Complete your order below.');
  });