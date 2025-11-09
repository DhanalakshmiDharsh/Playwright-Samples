import { Page } from "@playwright/test"

export class NavigationPage{

    readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    async electornicItemsPage(){

        await this.page.getByRole('button',{name:"Continue shopping"}).click()
        // // await this.page.locator('.nav-a').click()
        // await this.page.getByTitle(' Electronics ').click()
        // await this.page.getByText('Cameras & Photography').click()
        // await this.page.getByText('Samsung').first().click()
        await this.page.getByRole('searchbox', {name:"search"}).fill('mobile phones')
        await this.page.locator('[type="submit"]').click()
        await this.page.getByText('Add to cart').first().click()

    }
}