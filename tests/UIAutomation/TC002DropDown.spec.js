import { test, expect } from '@playwright/test';
let baseUrl = 'https://www.dummyticket.com/dummy-ticket-for-visa-application/'
test('Dropdown Demo Test - No Select Tag', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto(baseUrl);  ///, { timeout: 60000 }
    await page.locator('#select2-reasondummy-container').click(); // Open the dropdown
    await page.locator('.select2-search__field').fill('Pr'); // Type in the search field
    await expect(page.locator('.select2-results__option')).toHaveCount(3); // Verify the number of options displayed
    await expect(page.locator('.select2-results__option', { hasText: 'Proof of return at airport' })).toBeVisible();
    await expect(page.locator('.select2-results__option', { hasText: 'Prank a friend' })).toBeVisible();
    await expect(page.locator('.select2-results__option', { hasText: 'Prefer not to say' })).toBeVisible();
    await page.locator('.select2-search__field').fill('');
    await expect(page.locator('.select2-results__option')).toHaveCount(9);
    // await page.waitForTimeout(5000)
    // await page.locator('.select2-search__field').fill('Other').press('Enter'); // Select 'Other' option
    //await page.locator('.select2-results__option', { hasText: 'Other' }).press('Enter'); ///even when it is not visibe
    await page.locator('.select2-search__field').fill('Other')
    await page.locator('.select2-search__field').press('Enter');
    
    //validate the selected option
    const selectedOption = await page.locator('#select2-reasondummy-container').textContent();
    await expect(selectedOption).toContain('Other');
  
})