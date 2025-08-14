import { test, expect } from '@playwright/test';

// test('Dropdown Demo Test - No Select Tag', async ({ page }) => { ... })
test('Tags Tag', async ({ page }) => {
     await page.goto('https://demoblaze.com/');
     const firstLink = await page.$('a'); // اولین لینک
     const firstLinkText = await firstLink.textContent();
     console.log('متن اولین لینک:', firstLinkText);

  // --- استفاده از $$ ---
  const allLinks = await page.$$('a'); // همه لینک‌ها
  console.log('تعداد لینک‌ها:', allLinks.length);
});
