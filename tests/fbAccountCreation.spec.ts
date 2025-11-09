import {test, expect} from "@playwright/test"
import { LoginPage } from "../pageObject/createNewAccount"

test.beforeEach(async({page})=>{

    await page.goto('https://www.facebook.com//')
})

test('creating account', async({page})=>{

    const loginPage = new LoginPage(page)
    await loginPage.creatingAccountWithFillingDetails()

})

