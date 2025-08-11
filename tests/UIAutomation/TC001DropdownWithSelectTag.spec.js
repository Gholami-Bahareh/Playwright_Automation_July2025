import { test, expect } from '@playwright/test';
let baseUrl = 'https://testautomationpractice.blogspot.com/'
test('Dropdown Demo Test', async ({ page }) => {
  await page.goto(baseUrl,{ timeout: 60000 }); //(how to add a kind of wait )
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  ///first aproach to choose an item of dropdown, 
  ///await page.locator("ourLocator").selectOption(value/index/label);
  await page.locator("#country").selectOption("uk");
  // await page.locator("#country").selectOption({label: "Germany"});
  // await page.locator("#country").selectOption({index: 1});
  // await page.locator("#country").selectOption({value: "germany"});
  ///second aproach to choose an item of dropdown, 
  ///await page.selectOption("ourLocator",value/index/label)
  // await page.selectOption("#country","Brazil")
  // await page.selectOption("#country",{label: "Germany"})
  // await page.selectOption("#country",{index: 1})

  //To check how many options(items in dropdown) are available - Approach 1
  const optionLength = await page.locator("#country option")
  await expect(optionLength).toHaveCount(10);

    //To check how many options(items in dropdown) are available - Approach 2
    //whnenevr we have a locator count, greater than 1, in $$ will find all elements matching the specified selector
    const demoOption = await page.$$('#country option')
    console.log(demoOption.length);
  await expect(demoOption.length).toBe(10)

  

  //to validatespecific country in the dropdown
  let status = false;
  for (const demo of demoOption)
  {
    let value = await demo.textContent();
    if(value.includes("Nepal")){
      status = true;
      break;
    }
  }

  await expect(status).toBeFalsy();

  //   await expect(page.locator("[type='text']")).toHaveCount(4); //if we know how many of this element is there in th page  

});