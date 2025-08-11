import { test, expect } from '@playwright/test';

// test('Dropdown Demo Test - No Select Tag', async ({ page }) => { ... })
test('Tags Tag 1 @Smoke', async ({ page }) => {
    console.log('I am in Smoke tag 1');
});
test('Tags Tag 2 @Smoke', async ({ page }) => {
    console.log('I am in Smoke tag 2');
});

test('Tags Tag 1 @Regression', async ({ page }) => {
    console.log('I am in Regression tag 2');
});
test('Tags Tag 2 @Regression', async ({ page }) => {
    console.log('I am in Regression tag 2');
});

