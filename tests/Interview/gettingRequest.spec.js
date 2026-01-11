import {test,expect} from '@playwright/test'

test('API Getting User Details', async({page, request}) =>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    expect(response.status()).toBe(200)
    // const responseBody = await response.json()
    // console.log('User Details:', responseBody)
    const responseBody = await response.json()
    // expect(responseBody.page).toBe(2)
})