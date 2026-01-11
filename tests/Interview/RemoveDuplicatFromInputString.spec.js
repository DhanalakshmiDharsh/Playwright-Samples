import {test} from '@playwright/test'

test('Removing duplicate from input string', async({page}) =>{

    function removeDuplicates(str){
        const wordOf = str.toLowerCase().replace(/[^a-z0-9]/g, '')
        const word = new Set(wordOf)
        console.log('String after removing duplicates:', [...word].join(''))
    }
    removeDuplicates('Language')
})
