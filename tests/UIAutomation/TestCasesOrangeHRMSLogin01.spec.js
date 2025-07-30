import { test, expect } from '@playwright/test';
let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('test', async ({ page }) => {
  await page.goto(baseUrl);
  await page.waitForTimeout(10000)
  await page.getByPlaceholder('Username').fill('Admin')
  // await page.getByPlaceholder('Password').fill('admin123')
  await page.locator("[type='password']").fill('admin123')
  // await page.locator("[type='submit']").click()
  // getByRole('rolename', { name: 'text' })).click()
  await page.getByRole('button',{name:'Login'}).click()
 // await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toBeTruthy()
});

//await page.getByRole('button', { name: 'Login' }).click();