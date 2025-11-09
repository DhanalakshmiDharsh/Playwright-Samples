import {test} from '@playwright/test'

test.beforeEach( async({page}) =>{
    await page.goto('https://www.amazon.in/')
  


})
test('mobile device search', async({page}) =>{
//   await page.getByLabel('search bar').click()
// await page.getByRole('textbox', {name:"searchbox"}).first().click()
await page.getByRole('searchbox').first().click()
// await page.locator('nav-fill').getByRole('searchbox').fill('mobile phone')
await page.getByRole('searchbox').fill('mobile phone')
// await page.getByRole('button', {name:"mobile phone under 20000"}).first().click()
// await page.getByText('button').click()
await page.locator('[type="submit"]').click()

await page.getByText('Add to cart').first().click()
await page.getByText('Go to Cart').first().click()
// await page.getByText('This order colntains a gift').click()
await page.getByText('Proceed to Buy').first().click()


})

