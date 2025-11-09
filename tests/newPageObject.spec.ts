import { expect} from '@playwright/test'
import { NavigationOfPage } from '../pageObject/navigationOfPage'
import { BookStore } from '../pageObject/bookStore'
import { BrowserWindows } from '../pageObject/browserWindows'
import {test} from '../testOptions'

test.beforeEach(async({page, globalsQaUrl})=>{

    await page.goto(globalsQaUrl)
})

test('navigation of page', async({page})=>{
    

    const navigateToPage = new NavigationOfPage(page)
    await navigateToPage.formsLayoutPage()
    await page.screenshot({path : 'screenshot/formlayout.png'})
    // await page.locator('[col-md-3 col-sm-12]').screenshot({path : 'screenshot/usernamelabel.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))

    // await navigaeToPage.studentRegistration('Muruga','hello@gmail', '99525956565', 'Music')

    const onBookStore = new BookStore(page)
    await onBookStore.bookStoreApplication()

    const onBrowserWindow = new BrowserWindows(page)
    await onBrowserWindow.newBrowserWindow()

})

