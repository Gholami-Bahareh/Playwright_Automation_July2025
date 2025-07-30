import { test, expect } from '@playwright/test';
let baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test('test forgot the password', async ({ page }) => {
    const chr = 'abcdefghijklmnopqrstuvxyz0123456789'
    let username = '';
    for(let i = 0; i < 6; i++)
    {
        username = username + chr.charAt(Math.random()*chr.length);
    }
  await page.goto(baseUrl);
  await page.getByText('Forgot your password?').click()
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
  await expect(page.getByPlaceholder('Username')).toBeEditable()
  await page.getByPlaceholder('Username').fill(username)
  await page.locator("button[type='submit']").click()
  //await page.getByText('Reset Password').click()
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset")
  await expect(page.locator(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title")).toBeVisible()


 });