import {test, expect} from '@playwright/test'
        
test('adding Items', async({page}) =>{
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').fill('women dresses')
    await page.locator('[type="submit"]').click()
    // await page.getByTitle('CATEGORIES').click()
    await page.locator('.WCyB2K').click()
    await page.locator('.WCyB2K').isVisible()
    // await page.locator('.wsejfv').first().click()
    // await page.getByRole('textbox', {name:"Enter Email/Mobile number"}).fill('9952595664')
    // await page.getByRole('button', {name:"Request OTP"}).click()
    // await page.locator('.XDRRi5').fill('964135')
    // await page.locator('.zg-M3Z _0H7xSG').click()
    // await page.getByTitle('Price -- Low to High').click()
    // await page.getByRole('tab', {name:'Price -- Low to High'}).first().click()
    // await page.locator('.WKTcLC').click()
    // await page.locator('.N1bADF').click()
    await page.locator('._53J4C-').click()
    await page.getByRole('button', {name:"ADD TO CART"}).click()

})