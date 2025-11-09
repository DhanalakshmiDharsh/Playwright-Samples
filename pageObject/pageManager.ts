import { Page, expect} from '@playwright/test'
import { NavigationOfPage } from './navigationOfPage'
import { BookStore } from './bookStore'
import { BrowserWindows } from './browserWindows'

export class PageManager{

    private readonly page : Page
    private navigationOfPage : NavigationOfPage
    private bookStore : BookStore
    private browserWindows : BrowserWindows

    constructor(page: Page){
        this.page = page
        this.navigationOfPage = new NavigationOfPage(this.page)
        this.bookStore =  new BookStore(this.page)
        this.browserWindows =  new BrowserWindows(this.page)
}

navigateToPage(){
    return this.navigationOfPage
}

onBookStore(){
    return this.bookStore
}

onBrowserWindow(){
    return this.browserWindows
}

}