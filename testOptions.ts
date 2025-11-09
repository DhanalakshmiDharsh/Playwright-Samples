import {test as base} from '@playwright/test'
import { PageManager } from './pageObject/pageManager'

export type TestOptions={
    globalsQaUrl : string
    formsLayoutPage : string
    pageManager : PageManager

}

export const test = base.extend<TestOptions>({
    globalsQaUrl: ['', {option: true}],

    formsLayoutPage: async({page}, use)=>{

        await page.goto('/')
    
        await use('')
    
    },

    pageManager: async({page}, use)=>{
        const pm = new PageManager(page)
        await use(pm)
    }
})