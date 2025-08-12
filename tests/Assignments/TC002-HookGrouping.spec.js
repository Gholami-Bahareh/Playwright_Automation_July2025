import {test, expect} from '@playwright/test';
const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
test.beforeEach(async ({page}) => {
    await page.goto(baseUrl);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.locator('[type="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
   
});

test.afterEach(async ({page}) => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('[href="/web/index.php/auth/logout"]').click();
    await expect(page).toHaveURL(baseUrl);

});

test.describe('OrangeHRM Dashboard Tests', () => {
    test('Verify Admin Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await expect(page.url()).toContain("admin");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');  
    });

   test('Verify PIM Option', async ({ page }) => {
        await page.getByRole('link', { name: 'PIM' }).click();
        await expect(page.url()).toContain("pim");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

    });
       test('Verify Leave Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Leave' }).click();
        await expect(page.url()).toContain("leave");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');

    });
       test('Verify Time Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Time' }).click();
        await expect(page.url()).toContain("time");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet');

    });
       test('Verify Recruitment Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Recruitment' }).click();
        await expect(page.url()).toContain("recruitment");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');

    });
           test('Verify My Info Option', async ({ page }) => {
        await page.getByRole('link', { name: 'My Info' }).click();
        await expect(page.url()).toContain("viewPersonalDetails");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');

    });
           test('Verify Performance Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Performance' }).click();
        await expect(page.url()).toContain("performance");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');

    });
           test('Verify Dashboard Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Dashboard' }).click();
        await expect(page.url()).toContain("dashboard");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    });
           test('Verify Directory Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Directory' }).click();
        await expect(page.url()).toContain("directory");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');

    });
           test('Verify Maintenance Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Maintenance' }).click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill('admin123');
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect(page.url()).toContain("maintenance");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');

    });
           test('Verify Claim Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Claim' }).click();
        await expect(page.url()).toContain("claim");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim');

    });
      test.only('Verify Buzz Option', async ({ page }) => {
        await page.getByRole('link', { name: 'Buzz' }).click();
        await expect(page.url()).toContain("buzz");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');

    });
    
});