import { test, expect } from '@playwright/test';

test('Radio Button product_549', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

  // Selector for "Round Trip" radio button
  const roundTripRadio = page.locator('input#product_549');

  // Validate visibility
  if (await roundTripRadio.isVisible()) {
    console.log('Round Trip radio button is visible.');
  } else {
    console.error('Round Trip radio button is NOT visible.');
  }

  // Validate enabled state
  if (await roundTripRadio.isEnabled()) {
    console.log('Round Trip radio button is enabled.');
  } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

  // Check if it's selected, if not, select it
  if (await roundTripRadio.isChecked()) {
    console.log('Round Trip radio button is already selected.');
  } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await roundTripRadio.check();
    await page.waitForTimeout(5000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Dummy ticket for Visa Application" added to your order. Complete your order below.');
  }

  // Validate it’s now checked
  if (await roundTripRadio.isChecked()) {
    console.log('Successfully selected the Round Trip radio button.');
  } else {
    console.error('Failed to select the Round Trip radio button.');
  }
});


test('Radio Button product_550', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

  // Selector for "Round Trip" radio button
  const roundTripRadio = page.locator('input#product_550');
  const roundTripRadio0 = page.locator('input#product_549');
  // Validate visibility
  if (await roundTripRadio.isVisible()) {
    console.log('Round Trip radio button is visible.');
  } else {
    console.error('Round Trip radio button is NOT visible.');
  }

  // Validate enabled state
  if (await roundTripRadio.isEnabled()) {
    console.log('Round Trip radio button is enabled.');
  } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

  // Check if it's selected, if not, select it
  if (await roundTripRadio.isChecked()) {
    console.log('Round Trip radio button is already selected.');
    await roundTripRadio0.check()
    await page.waitForTimeout(3000);
    await roundTripRadio.check()
    await page.waitForTimeout(5000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Dummy return ticket" added to your order. Complete your order below.');
 
  } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await roundTripRadio.check();
    await page.waitForTimeout(3000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Dummy return ticket" added to your order. Complete your order below.');
  }

  // Validate it’s now checked
  if (await roundTripRadio.isChecked()) {
    console.log('Successfully selected the Round Trip radio button.');
  } else {
    console.error('Failed to select the Round Trip radio button.');
  }
});


test('Radio Button product_551', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

  // Selector for "Round Trip" radio button
  const roundTripRadio = page.locator('input#product_551');

  // Validate visibility
  if (await roundTripRadio.isVisible()) {
    console.log('Round Trip radio button is visible.');
  } else {
    console.error('Round Trip radio button is NOT visible.');
  }

  // Validate enabled state
  if (await roundTripRadio.isEnabled()) {
    console.log('Round Trip radio button is enabled.');
  } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

  // Check if it's selected, if not, select it
  if (await roundTripRadio.isChecked()) {
    console.log('Round Trip radio button is already selected.');
  } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await roundTripRadio.check();
    await page.waitForTimeout(5000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Dummy hotel booking" added to your order. Complete your order below.');
  }

  // Validate it’s now checked
  if (await roundTripRadio.isChecked()) {
    console.log('Successfully selected the Round Trip radio button.');
  } else {
    console.error('Failed to select the Round Trip radio button.');
  }
});



test('Radio Button product_3186', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

  // Selector for "Round Trip" radio button
  const roundTripRadio = page.locator('input#product_3186');

  // Validate visibility
  if (await roundTripRadio.isVisible()) {
    console.log('Round Trip radio button is visible.');
  } else {
    console.error('Round Trip radio button is NOT visible.');
  }

  // Validate enabled state
  if (await roundTripRadio.isEnabled()) {
    console.log('Round Trip radio button is enabled.');
  } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

  // Check if it's selected, if not, select it
  if (await roundTripRadio.isChecked()) {
    console.log('Round Trip radio button is already selected.');
  } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await roundTripRadio.check();
    await page.waitForTimeout(5000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Dummy ticket and hotel" added to your order. Complete your order below.');
  }

  // Validate it’s now checked
  if (await roundTripRadio.isChecked()) {
    console.log('Successfully selected the Round Trip radio button.');
  } else {
    console.error('Failed to select the Round Trip radio button.');
  }
});



test('Radio Button product_7441', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

  // Selector for "Round Trip" radio button
  const roundTripRadio = page.locator('input#product_7441');

  // Validate visibility
  if (await roundTripRadio.isVisible()) {
    console.log('Round Trip radio button is visible.');
  } else {
    console.error('Round Trip radio button is NOT visible.');
  }

  // Validate enabled state
  if (await roundTripRadio.isEnabled()) {
    console.log('Round Trip radio button is enabled.');
  } else {
    console.error('Round Trip radio button is NOT enabled.');
  }

  // Check if it's selected, if not, select it
  if (await roundTripRadio.isChecked()) {
    console.log('Round Trip radio button is already selected.');
  } else {
    console.log('Round Trip radio button is NOT selected. Selecting now...');
    await roundTripRadio.check();
    await page.waitForTimeout(5000); // Wait for 3 second to ensure the action is processed
    await expect(page.locator(".woocommerce-message")).toContainText('"Past dated ticket" added to your order. Complete your order below.');
  }

  // Validate it’s now checked
  if (await roundTripRadio.isChecked()) {
    console.log('Successfully selected the Round Trip radio button.');
  } else {
    console.error('Failed to select the Round Trip radio button.');
  }
});




