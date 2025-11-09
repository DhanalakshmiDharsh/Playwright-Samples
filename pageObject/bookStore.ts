import {Page, expect} from '@playwright/test'

export class BookStore{

    private readonly page: Page

    constructor(page: Page){

        this.page = page
    }

    async bookStoreApplication(){
        await this.page.locator('.header-wrapper' , {hasText:'Book Store Application'}).click()
        await this.page.getByText('Login').click()
        await this.page.getByRole('textbox', {name:"UserName"}).fill('Dharsh')
        await this.page.getByRole('textbox', {name:"Password"}).fill('123')
        await this.page.getByRole('button', {name:"New User"}).click()
    }
}