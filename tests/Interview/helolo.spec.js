import {test,expect} from '@playwright/test'

test('Testing', async({page}) =>{

    await page.goto('https://sphere-engine.com/compilers')
    // await expect(page).toHaveTitle('Sphere Engine Compilers')
    await page.getByRole('button', {name : 'input'}).click()
    await page.getByRole('link', {name: ''}).click({check: true})
})