import {test, expect} from '@playwright/test'
// import { NavigationOfPage } from '../pageObject/navigationOfPage'
// import { BookStore } from '../pageObject/bookStore'
// import { BrowserWindows } from '../pageObject/browserWindows'
import { PageManager } from '../pageObject/pageManager'

test.beforeEach(async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')
})

test('navigation of page', async({page})=>{


    const pm = new PageManager(page)
    // const navigaeteToPage= new NavigationOfPage(page)
    await pm.navigateToPage().formsLayoutPage()
    
})

test ('parameterized', async({page})=>{
    // const navigaeToPage = new NavigationOfPage(page)
    // const onBookStore = new BookStore(page)
    // const onBrowserWindow = new BrowserWindows(page)
    const pm = new PageManager(page)

    await pm.navigateToPage().formsLayoutPage()
    // await navigaeToPage.studentRegistration('Muruga','hello@gmail', '99525956565', 'Music')
    await pm.onBookStore().bookStoreApplication()
    await page.screenshot({path : 'screenshot/bookstorelogin.png'})
    await pm.onBrowserWindow().newBrowserWindow()

})

