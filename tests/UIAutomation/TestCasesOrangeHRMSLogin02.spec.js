import { test, expect } from '@playwright/test';
let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('test login with wrong password', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByPlaceholder('Username').fill('Admin')
  await page.locator("[type='password']").fill('admn123')
  await page.getByRole('button',{name:'Login'}).click()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toContainText("credential")
 
});

test('test login with wrong usernmae', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByPlaceholder('Username').fill('Admn')
  await page.locator("[type='password']").fill('admin123')
  await page.getByRole('button',{name:'Login'}).click()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toContainText("credential")
 
});

test('test login with wrong usernmae& wrong password', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByPlaceholder('Username').fill('Admn')
  await page.locator("[type='password']").fill('admin123')
  await page.getByRole('button',{name:'Login'}).click()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()
  await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toContainText("credential")
 
});

