import {test, expect} from '@playwright/test'

test('API testing', async({request})=>{
    const response = await request.get('https://library-api.postmanlabs.com/books')
    expect(response.status()).toBe(200)
    const rep = await response.json()
    console.log(rep)
    // expect(rep.count).toBeGreaterThan(0)

})

test('Post request', async({request}) =>{
    const response1 = await request.post('https://library-api.postmanlabs.com/books',{
        
        headers: {
        'Content-Type': 'application/json',
        'api-key': 'postmanrulz'   
      },    
        
        data :{
        
        "title": "API with POSTMAN now",
        "author": "Dhars",
        "genre": "Testing",
        "yearPublished": 2025
        }
        })
         expect(response1.status()).toBe(201)
        const rep = await response1.json()
        console.log(rep)
        expect(rep.title).toBe("API with POSTMAN now")

})