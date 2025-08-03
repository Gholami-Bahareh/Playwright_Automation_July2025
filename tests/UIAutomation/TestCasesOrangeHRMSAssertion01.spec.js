import { test, expect } from '@playwright/test';
let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('test', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByPlaceholder('Username').fill('Admin')
  await page.locator("[type='password']").fill('admin123')
  await page.getByRole('button',{name:'Login'}).click()
  //Assersion
  await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toBeVisible()
  await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toContainText("Dashboard")
  await expect(page.locator("img[alt='client brand banner']")).toBeVisible()
  await expect(page).toHaveTitle("OrangeHRM")
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 
 
});

