import {test, expect} from "@playwright/test"
import { NavigationPage} from '../pageObject/navigationPage'

test.beforeEach(async({page})=>{
    await page.goto('https://www.amazon.in/')
    // await page.getByRole('button',{name:"Continue shopping"}).click()

})

test('navigation to page', async({page})=>{

    const navigaeTo = new NavigationPage(page)
    await navigaeTo.electornicItemsPage()
})