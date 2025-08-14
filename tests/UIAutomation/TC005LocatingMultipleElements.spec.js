import {test,expect} from "@playwright/test";

test('Locating Multiple Elements', async ({ page }) => {
    await page.goto('https://demoblaze.com/');


    await page.waitForSelector('.card-title');
    const ProductName = await page.$$('.card-title');
    console.log(ProductName.length);

    for(const product of ProductName) {
        const text = await product.textContent();
        console.log(text);
    }





})