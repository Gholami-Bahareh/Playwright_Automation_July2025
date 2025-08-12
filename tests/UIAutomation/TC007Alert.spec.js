//can have ok and Cancel OR writing something in the input box, and then click on ok eller cancel
import { test, expect } from '@playwright/test';
test('Alert Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Handel pop-up  
    ///First we need to give the knowledge to playwright that if we deal with a pop-up what is it and things about it
    page.on('dialog', async dialug => {
        expect(dialug.type()).toBe('alert');
        expect(dialug.message()).toBe('I am a JS Alert');
        
        await dialug.accept(); 
        console.log('Alert accepted'); 
    })

    await page.click('[onclick="jsAlert()"]');
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
})

test('Confirm Test - ok', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Handel pop-up  
    ///First we need to give the knowledge to playwright that if we deal with a pop-up what is it and things about it
    page.on('dialog', async confirm => {
        expect(confirm.type()).toBe('confirm');
        expect(confirm.message()).toBe('I am a JS Confirm');

        // If you want to accept the confirm dialog
        await confirm.accept();
        console.log('Confirm accepted');
    })

    await page.click('[onclick="jsConfirm()"]');
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
})
test('Confirm Test - cancel', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Handel pop-up  
    ///First we need to give the knowledge to playwright that if we deal with a pop-up what is it and things about it
    page.on('dialog', async confirm => {
        expect(confirm.type()).toBe('confirm');
        expect(confirm.message()).toBe('I am a JS Confirm');

        // If you want to dismiss the confirm dialog
        await confirm.dismiss();
        console.log('Confirm dismissed'); 
    })

    await page.click('[onclick="jsConfirm()"]');
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
})

test('Prompt - enter vale and ok', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Handel pop-up  
    ///First we need to give the knowledge to playwright that if we deal with a pop-up what is it and things about it
    //Registering an event handler
    page.on('dialog', async prompt => {
        expect(prompt.type()).toBe('prompt');
        expect(prompt.message()).toBe('I am a JS prompt');
        expect(prompt.defaultValue()).toBe(''); // Default value is empty
        await prompt.accept('Hello, this is a prompt!'); // You can pass a value to the prompt
        console.log('Prompt accepted');
        
    })

    await page.click('[onclick="jsPrompt()"]');
    await expect(page.locator('#result')).toHaveText('You entered: Hello, this is a prompt!') // Wait for the result to be updated
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
})
test('Prompt - cancel', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Handel pop-up  
    ///First we need to give the knowledge to playwright that if we deal with a pop-up what is it and things about it
    //Registering an event handler
    page.on('dialog', async prompt => {
        expect(prompt.type()).toBe('prompt');
        expect(prompt.message()).toBe('I am a JS prompt');
        expect(prompt.defaultValue()).toBe(''); // Default value is empty
        await prompt.dismiss(); // Dismiss the prompt without entering a value
        console.log('Prompt calceled');
        
    })

    await page.click('[onclick="jsPrompt()"]');
    await expect(page.locator('#result')).toHaveText('You entered: null'); // Wait for the result to be updated
    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the alert handling
})