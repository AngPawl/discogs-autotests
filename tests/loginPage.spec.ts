import { test, expect, type Page } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.discogs.com/');
    await page.getByLabel('Close', { exact: true }).click();
})

test.describe('Login Page', () => {
    test('Login Page opens', async ({ page }) => {
        await page.getByRole('link', { name: 'Log In'}).click();

        await expect(page).toHaveTitle(/Log in/);
    })
})