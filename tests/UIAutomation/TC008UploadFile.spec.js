import{test, expect} from '@playwright/test';

let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('Upload File', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByPlaceholder('Username').fill('Admin')
    await page.locator("[type='password']").fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox').nth(1).fill('Demo');
    await page.getByRole('textbox', { name: 'Type description here' }).fill('DemoQA');
    await page.getByRole('textbox', { name: 'Add note' }).fill('DemoQANOTes');
    await page.waitForSelector('[class="oxd-file-button"]');
    await page.getByText('Browse').setInputFiles('tests/uploadFiles/demo.pdf');

  //await page.getByRole('button',{name:'Choose File'}).
  //await page.locator('[class="oxd-file-button"]').setInputFiles('tests/uploadFiles/demo.pdf');
    await page.waitForTimeout(10000); // Wait for the file to be uploaded


});