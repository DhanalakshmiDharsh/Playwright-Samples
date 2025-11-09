import {test} from '../testOptions'


test ('parameterized', async({pageManager})=>{


    await pageManager.navigateToPage().formsLayoutPage()
    // await navigaeToPage.studentRegistration('Muruga','hello@gmail', '99525956565', 'Music')
    await pageManager.onBookStore().bookStoreApplication()
    // await page.screenshot({path : 'screenshot/bookstorelogin.png'})
    await pageManager.onBrowserWindow().newBrowserWindow()

})

