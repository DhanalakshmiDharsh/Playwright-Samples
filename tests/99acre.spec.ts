import {test} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('https://www.olx.in/')
    
} )

test('searching a table', async({page}) =>{

    await page.getByPlaceholder('Find Cars, Mobile Phones and more...').fill('computer table')
    await page.locator('.rui-o3KKi').click()
    await page.getByAltText('Product image').first().click()


})