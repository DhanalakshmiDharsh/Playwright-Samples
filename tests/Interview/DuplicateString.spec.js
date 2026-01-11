import {test, except} from '@playwright/test'

test('find duplicate strings', async({page}) =>{

    function duplicateString(str){
        const wordOf = str.toLowerCase().replace(/[^a-z0-9]/g, '')
        const word = new Set()
        const duplicate = new Set()

        for( const char of wordOf){
            if(word.has(char))
                duplicate.add(char) 
            else
                word.add(char)

        }
        console.log('Duplicate letters are:', [duplicate])
    }
    duplicateString('Mathematics')
})
