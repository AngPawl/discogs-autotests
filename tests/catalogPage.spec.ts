import { test, expect, type Page } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.discogs.com/');
    await page.getByLabel('Close', { exact: true }).click();
})

test.describe('Catalog Page', () => {
    test('Catalog Page opens', async ({ page }) => {
        await page.getByRole('button', { name: 'Explore'}).click();
        await page.getByRole('menuitem', { name: 'Explore All'}).click();

        await expect(page.locator('.explore')).toHaveText('Find Music on Discogs ')
    })
})