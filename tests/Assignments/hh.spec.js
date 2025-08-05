import { test, expect } from '@playwright/test';

test('CheckBoxes', async ({ page }) => {
  await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/', { timeout: 60000 });

  await expect(page.locator(".navbar-logo-img.navbar-logo-img-normal")).toBeVisible();

  // کلیک روی محصول
  await page.locator('#product_550').click();
  await page.locator('#product_549').click();
  await page.locator('#product_551').click();
  await page.locator('#product_550').click();

  // صبر دستی برای اطمینان (کاری که می‌کنه اینه که عملاً یه فاصله می‌ذاره تا مرورگر برسه به نمایش پیام)
  await page.waitForTimeout(3000); // ← ← ← این خط خیلی مهمه

  const message = page.locator('.woocommerce-message');

  const messageText = await message.textContent(); // ← متن کامل پیامو می‌گیریم
  console.log('متن پیام:', messageText);

  await expect(message).toContainText('Dummy return ticket');
});
