
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('SauceDemo_2025-04-10', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('https://www.saucedemo.com');

    // Take screenshot
    await page.screenshot({ path: 'login-page.png', { fullPage: true } });

    // Fill input field
    await page.fill('#user-name', 'standard_user');

    // Fill input field
    await page.fill('#password', 'secret_sauce');

    // Click element
    await page.click('#login-button');

    // Take screenshot
    await page.screenshot({ path: 'logged-in-page.png', { fullPage: true } });

    // Click element
    await page.click('#react-burger-menu-btn');

    // Click element
    await page.click('#logout_sidebar_link');

    // Fill input field
    await page.fill('#user-name', 'locked_out_user');

    // Fill input field
    await page.fill('#password', 'secret_sauce');

    // Click element
    await page.click('#login-button');

    // Take screenshot
    await page.screenshot({ path: 'locked-out-error.png', { fullPage: true } });
});