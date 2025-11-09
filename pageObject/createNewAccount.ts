import { Page } from "@playwright/test"

export class LoginPage{

    readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    async creatingAccountWithFillingDetails(){

    await this.page.getByRole('button', {name :"Create new account"}).click()
    await this.page.getByPlaceholder('First name').click()
    await this.page.getByLabel('First name').fill('YaraPinku')
    const nameSelection = this.page.getByRole('textbox', {name: "Surname"})
    await nameSelection.fill('souls')
    }
}
