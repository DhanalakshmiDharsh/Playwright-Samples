import {test, expect} from '@playwright/test'

test('Mocking of API', async({page}) =>{
    await page.route('', async route =>{
        route.fulfill({
            status: 200,
            contentType : 'application/json',
            body : JSON.stringify({
                id : 6,
                name: 'Murugan'
            })
        })
    })
 
})