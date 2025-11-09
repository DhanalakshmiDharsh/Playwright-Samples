import {test, expect} from '@playwright/test'


test.beforeEach(async ({page}) =>{
    await page.goto('/')
    await page.getByText('Forms').click()
    await page.getByText('Form layouts').click()

})

test('user facing locators', async ({page}) =>{
    // await page.getByRole('textbox', {name: "Email"}).first().click()
    // await page.getByRole('button', {name: "sign in"}).first().click()
    // // // Next functions
    // await page.getByLabel('email').first().click()
    // await page.getByPlaceholder('jane doe').click()
    // await page.getByText('Basic Form').click()
    await page.getByTitle('IOT Dashboard').click()


})

test('locating Child Elements', async ({page}) =>{
    // await page.locator('nb-card nb-radio :text-is("option1")').click()
    // await page.locator('nb-card').locator('nb-radio').locator(':text-is("option2")').click()
    // await page.locator('nb-card').getByRole('button', {name:"sign in"}).first().click()

    // await page.locator('nb-card').nth(3).getByRole('button', {name:"sign in"}).click()


})

test('locating parent elements', async({page}) =>{
    // await page.locator('nb-card', {hasText:"Using the grid"}).getByRole('textbox', {name:"password"}).click()
    // await page.locator('nb-card', {has : page.locator('#inputEmail')}).getByRole('textbox', {name:"email"}).click()
    // await page.locator('nb-card').filter({hasText: "Horizontal form"})
    // .getByRole('textbox', {name:"password"}).click()
    // await page.locator('nb-card').filter({has : page.locator('.status-warning')})
    // .getByRole('textbox', {name: "email"}).click()
    // await page.locator('nb-card').filter({has : page.locator('nb-checkbox')}).filter({hasText: "sign in"})
    // .getByRole('textbox', {name: "password"}).click()
    // await page.locator('nb-card').filter({hasText: "submit"}).filter({has: page.locator('.status-danger')})
    // .getByRole('textbox', {name:"password"}).click()
    // Own sample
    // await page.locator('nb-card').filter(hasText: "Basic Form").locator('nb-checkbox').click()
    
})

test('reusing the locators', async({page}) =>{
    const basicForm = page.locator('nb-card').filter({hasText : "Basic Form"})
    const emailField = basicForm.getByRole('textbox', {name:"email"})
    const passwordField = basicForm.getByRole('textbox', {name:"password"})

    await emailField.fill('dharshani6@gmail.com')
    await passwordField.fill('786')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.locator('button').click()

    await expect(emailField).toHaveValue('dharshani6@gmail.com')

})

test('extracting value', async({page}) =>{
    const basicForm = page.locator('nb-card').filter({hasText: "Basic Form"})
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    // second
    const radioButton = await page.locator('nb-radio').allTextContents()
    expect(radioButton).toContain('Option 2')

    // Third
    const emailField1 = basicForm.getByRole('textbox', {name: "email"})
    await emailField1.fill('dharsh@gmail.com')
    const emailValue = await emailField1.inputValue()
    expect(emailValue).toEqual('dharsh@gmail.com')

    const placeHolderValue = await emailField1.getAttribute('placeHolder')
    expect(placeHolderValue).toEqual('Email')

})

test('assertions', async({page}) =>{
    const horizontalForm = page.locator('nb-card').filter({hasText: "Horizontal form"}).locator('button')
    const final = await horizontalForm.textContent()
    expect(final).toEqual('Sign in')

    const checkValue = page.locator('nb-card').filter({hasText: "Horizontal form"}).locator('nb-checkbox')
    await expect(checkValue).toHaveText('Remember me')

    await expect.soft(checkValue).toHaveText('Remember me')
    await checkValue.click()

})


test('testing', async({page}) =>{

    await page.goto('/')
    await page.getByText('Charts').click()
    await page.getByText('Echarts').click()

})

