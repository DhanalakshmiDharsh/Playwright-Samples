import {Page, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'

export class NavigationOfPage{

    readonly page: Page

    constructor(page: Page){

        this.page = page
    }

    async formsLayoutPage(){

        // await this.page.getByPlaceholder('First Name').fill('Yara')
        // await this.page.getByPlaceholder('Last Name').fill('Pinku')
        // await this.page.getByRole('radio', {name:"Female"}).check({force:true})
        // await this.page.getByPlaceholder('Mobile Number').fill('9677559609')

        const randomOfName = faker.person.firstName()
        await this.page.getByPlaceholder('First Name').fill(randomOfName)
        const randomOfName1 = faker.person.lastName()
        await this.page.getByPlaceholder('Last Name').fill(randomOfName1)
        const randomOfNumber = faker.phone.number()
        // const randomOfNumber1 = `${faker.phone.number.arguments('numbers')}`
        await this.page.getByPlaceholder('Mobile Number').fill(randomOfNumber)
         
    }

    // async studentRegistration(name: string, email: string, mobile: any, optionText: string){
    //     await this.page.getByRole('textbox' , {name: "Name"}).fill(name)
    //     await this.page.getByRole('textbox', {name:"Email"}).fill(email)
    //     await this.page.getByRole('textbox', {name: "Mobile number"}).fill(mobile)
    //     await this.page.getByRole('radio', {name:optionText}).check({force:true})
    //     await this.page.getByRole('button').click()
    // }
}