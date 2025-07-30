import { test, expect } from '@playwright/test';
let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('test login without entering password and Username', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByRole('button',{name:'Login'}).click()
  await expect(page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)")).toBeVisible()
 await expect(page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3)")).toBeVisible()
});