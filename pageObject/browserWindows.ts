import {Page, expect} from '@playwright/test'

export class BrowserWindows{
     private readonly page: Page

     constructor(page: Page){

        this.page = page
     }

     async newBrowserWindow(){

        await this.page.locator('.header-wrapper' , {hasText: "Alerts, Frame & Windows"}).click()
        await this.page.getByText('Browser Windows').click()
        // await this.page.locator('.mt-4 btn btn-primary', {hasText: "New Window"}).click()
        await this.page.getByRole('button', {name:"New Tab"}).click()
        // await this.page.getByRole('button', {name: "New Window Message"}).click()
        await this.page.getByText('This is a sample page').isVisible()
     }
}