import {test, expect} from '@playwright/test'

test('Mocking API response', async({page}) =>{

    await page.route('https://dummyjson.com/products/1', async route =>{
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                id: 1,
                title: 'Product 1',
                price: 100,
                description: 'Description for Product 1',
                category: 'Category 1',
                image: 'https://dummyjson.com/image1.jpg'
            })
        })
    })

    const response = await page.request.get('https://dummyjson.com/products/1')
    const data = await response.json()   
})