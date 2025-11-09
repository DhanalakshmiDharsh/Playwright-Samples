// import test from '@playwright/test'

// test('the first test', async ({page}) =>{
//     await page.goto('http://localhost:4200/')
//     await page.getByText('Forms').click()
//     await page.getByText('Form layouts').click()

// })


// test.beforeEach(async ({page}) =>{

//    await page.goto('https://www.google.com/')
// //    await page.getByText('Store').click()
// })

// test.describe('suite1', ()=>{

//     test('the first test', async ({page}) =>{
//     await page.getByText('Store').click() 
//     })

//     // test('navigate to datepicker page', async({page}) =>{
//     //     await page.getByText('Datepicker').click()
//     // })
// })

// Locator & syntax error

// import {test} from '@playwright/test'

// test.beforeEach(async ({page}) =>{
//     await page.goto('https://www.facebook.com/')
//     // await page.getByText('Create New Account').click()

// })

// test('locator syntax error', async ({page}) =>{

//     await page.locator('[name="email"]').click()
//     // page.locator('#email').click()
//     // await page.locator('[placeholder="Email address or phone number"]').click()
//     // page.locator('input[name="email"]#email').click()
//     await page.locator('[name="pass"]').click()
//     // await page.locator('[data-testid="royal-pass"]').click()
//     // await page.locator('[placeholder="Password"]').click()
// })




// <input type="text" class="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal-email" placeholder="Email address or phone number" autofocus="1" aria-label="Email address or phone number">

// <input type="password" class="inputtext _55r1 _6luy _9npi" name="pass" id="pass" data-testid="royal-pass" placeholder="Password" aria-label="Password">


import {test} from '@playwright/test'

test.beforeEach(async({page}) =>{

    await page.goto('http://localhost:4200/')
    await page.getByText('Charts').click()
    await page.getByText('Echarts').click()

})

test('testOf', async({page}) =>{
await page.getByText('Pie').click()

})

