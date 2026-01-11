import {test, expect} from '@playwright/test'

test('Deleting a user data', async({request}) =>{

    const res = await request.delete('https://reqres.in/api/users?page=2')
    expect(res.status()).toBe(204)
    
})