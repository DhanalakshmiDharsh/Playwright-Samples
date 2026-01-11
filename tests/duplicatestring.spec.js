import {test, expect} from '@playwright/test'

test('remove duplicate strings', async()=>{

    const inputText = "Hello"
    function removeDuplicates(str){
        let word = new Set()
        let result = ""
        for(let ch of str){
            if(!word.has(ch)){
                word.add(ch)
                result += ch
            }
        }
        return result
    }
    const output = removeDuplicates(inputText)
    console.log(output)
    expect(output).toBe('Helo')
})