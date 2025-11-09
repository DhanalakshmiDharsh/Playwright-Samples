import {test, expect} from '@playwright/test'


test('visual testing', async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')
    await page.getByPlaceholder('First Name').fill('Dhars')
    await page.getByPlaceholder('Last Name').fill('kv')
    await page.getByPlaceholder('Mobile Number').fill('9677559609')
    const selectionOf = page.getByRole('checkbox', {name: "Reading"})
    await selectionOf.check({force:true})

    await expect(selectionOf).toHaveScreenshot()



})