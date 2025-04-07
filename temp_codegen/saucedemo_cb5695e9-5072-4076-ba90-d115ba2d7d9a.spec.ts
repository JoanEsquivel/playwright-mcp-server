
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('SauceDemo_2025-04-07', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('https://www.saucedemo.com');

    // Fill input field
    await page.fill('[data-test="username"]', 'standard_user');

    // Fill input field
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click element
    await page.click('[data-test="login-button"]');

    // Click element
    await page.click('#react-burger-menu-btn');

    // Click element
    await page.click('#logout_sidebar_link');

    // Fill input field
    await page.fill('[data-test="username"]', 'locked_out_user');

    // Fill input field
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click element
    await page.click('[data-test="login-button"]');
});