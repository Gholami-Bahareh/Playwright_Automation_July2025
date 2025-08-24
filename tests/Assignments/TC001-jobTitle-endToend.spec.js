import{test, expect} from '@playwright/test';

let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('Upload File', async ({ page }) => {
    await page.goto(baseUrl);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.locator("[type='password']").fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toBeVisible()
    await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toContainText("Dashboard")
    await expect(page.locator("img[alt='client brand banner']")).toBeVisible()
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('button', { name: 'Add' }).click();


})