import {test} from '@playwright/test'

test.beforeEach(async({page}) =>{
 await page.goto('https://www.myntra.com/')
    
})

test ('shopping', async({page}) =>{
    await page.getByRole('link', {name:"Fashion for Ladies"}).click()
    await page.getByRole('link', {name:"Visit Website"}).click()
    await page.getByRole('searchbox').first().click()
    await page.getByRole('searchbox').fill('dress')
    // await page.locator('[type="submit"]').click()
    // // await page.getByText('Sort by:').filter({hasText:"Sort by:"}).selectOption('Low to High')
    // // await page.getByRole('checkbox', {name:"Get It by Tomorrow"}).click()
    // await page.getByRole('button', {name:"Add to cart"}).first().click()
    // const locatPoint = page.getByTitle('Size:')
    // await locatPoint.filter({hasText:"L"}).selectOption("L")
    // await page.getByRole('navigation', {name:"hello"}).click()

})