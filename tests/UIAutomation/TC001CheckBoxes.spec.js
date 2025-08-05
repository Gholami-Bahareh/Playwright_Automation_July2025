import { test, expect } from '@playwright/test';
let baseUrl = 'https://testautomationpractice.blogspot.com/'
test('CheckBoxes', async ({ page }) => {
  await page.goto(baseUrl);

//   const weekdays = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//   for (const day of weekdays) {
//     const checkbox = page.locator(`input[id="${day}"]`);
    const weekdays = ['#sunday','#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday'];
    for (const day of weekdays) {
    const checkbox = page.locator(day);
    await checkbox.click();
    await expect(checkbox).toBeVisible();
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  }

//   const checkbox = page.locator('#wednesday')
//   await checkbox.click();
//   await expect(checkbox).toBeChecked();
//   await checkbox.click();
//   await expect(checkbox).not.toBeChecked();
});


test('Radio', async ({ page }) => {
  await page.goto(baseUrl);
  const radioButtonsMale = page.locator('#male');
  const radioButtonsFemale = page.locator('#female');
  await radioButtonsMale.click();
  await expect(radioButtonsMale).toBeChecked();
  await expect(radioButtonsFemale).not.toBeChecked();
  await radioButtonsFemale.click();
  await expect(radioButtonsMale).not.toBeChecked();
  await expect(radioButtonsFemale).toBeChecked();

});




