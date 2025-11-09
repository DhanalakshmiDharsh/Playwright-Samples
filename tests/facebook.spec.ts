import {test, expect} from '@playwright/test'

test.beforeEach( async({page}) =>{
    await page.goto('https://www.facebook.com//')
  


})
test('create the new account', async({page}) =>{
await page.getByRole('button', {name :"Create new account"}).click()
await page.getByPlaceholder('First name').fill('Yara')
// await page.getByLabel('First name').fill('YaraPinku')
const nameSelection = page.getByRole('textbox', {name: "Surname"})
await nameSelection.fill('souls')
// await page.getByPlaceholder('lastname').click()
// await page.getByRole('textbox', {name: "lastname"}).fill('D')

const dayOption = page.getByTitle('Day')
await dayOption.filter({hasText: "6"}).selectOption("6")
// await dayOption.getByRole('option', {name:"6"}).selectOption("6")
// await page.locator('[data-name="birthday_wrapper"]').filter({hasText: "Day"}).getByRole('textbox', {name:"Day"}).selectOption("6")
// // await dayOption.filter({has: page.}).selectOption("6")
// await dayOption.getByTitle('Month').selectOption("Jan")
// await dayOption.getByTitle('Year').selectOption("1995")
const monthOption = page.getByTitle('Month')
await monthOption.filter({hasText: "Jan"}).selectOption("Jan")
const yearOption = page.getByTitle('Year')
await yearOption.filter({hasText: "1995"}).selectOption("1995")
// Gender selection Radio Button
await page.getByRole('radio', {name:"Female"}).click({force: true})
await page.getByRole('radio', {name: "Female"}).check({force:true})
await page.getByRole('radio', {name: "Female"}).isChecked()

// MOBILE number field
// await page.getByPlaceholder('Mobile number or email address').click()
// await page.getByPlaceholder('Mobile number or email address').fill('9952595664')
const clickOption = page.getByRole('textbox', {name: "Mobile number or email address"})
await clickOption.fill('9952595664')
const clickOption1 = page.getByRole('textbox', {name: "New password"})
await clickOption1.fill('xyz@123')
await page.getByRole('button', {name: "Sign Up"}).click()

await page.getByRole('button', {name: "No, Create New Account"}).click()

const inputOption = page.getByRole('textbox', {name: "FB"})
await inputOption.fill('21096')
await page.getByRole('button', {name: "Continue"}).click()

await page.getByRole('button', {name: "Ok"}).click()
await page.getByRole('button', {name: "Find Friends"}).click()

// await page.getByLabel("Mobile number or email address").fill('9952595664')
// await page.getByPlaceholder('New password').click()
// await page.getByLabel('New password').fill('abcd@123')

})

