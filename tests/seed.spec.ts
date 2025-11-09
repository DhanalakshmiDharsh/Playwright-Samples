import { test, expect } from '@playwright/test';

test('Test Seed', async({page})=>{

    await page.goto('/')
    await page.getByText('Alerts, Frame & Windows').click()
    // await page.locator('.header-wrapper' , {hasText: "Alerts, Frame & Windows"}).click()
    await page.getByText('Browser Windows').click()
    // await this.page.locator('.mt-4 btn btn-primary', {hasText: "New Window"}).click()
    await page.getByRole('button', {name:"New Tab"}).click()
    await page.getByText('This is a sample page').isVisible()


})


