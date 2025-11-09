import { test, expect } from '@playwright/test';

test('slide price filter on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.getByPlaceholder('Search Amazon.in').fill('mobile phones');
  await page.getByRole('button', { name: 'Go' }).click();
const slider = page.locator('.a-slider-handle-left');
  await expect(slider).toBeVisible();
})
