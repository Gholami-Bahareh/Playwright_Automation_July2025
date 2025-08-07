import { test, expect } from '@playwright/test';
let baseUrl = 'https://www.dummyticket.com/dummy-ticket-for-visa-application/'
const products = [
  { id: '#product_549', message: '"Dummy ticket for Visa Application" added to your order. Complete your order below.' },
  { id: '#product_550', message: '"Dummy return ticket" added to your order. Complete your order below.' },
  { id: '#product_551', message: '"Dummy hotel booking" added to your order. Complete your order below.' },
  { id: '#product_3186', message: '"Dummy ticket and hotel" added to your order. Complete your order below.' },
  { id: '#product_7441', message: '"Past dated ticket" added to your order. Complete your order below.' }
]; 

test('Radio Button product', async ({ page }) => {
  test.setTimeout(90000); 
  await page.goto(baseUrl);
  for(const product of products) {
  
  const roundTripRadio = page.locator(product.id);
  console.log(product.id);
  await roundTripRadio.check();
  await page.waitForTimeout(5000);
  await expect(page.locator(".woocommerce-message")).toContainText(product.message);
  }});