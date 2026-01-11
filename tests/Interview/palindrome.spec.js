import {test, expect} from '@playwright/test'

test('Finding a palindrome string', async({page}) => {
    
    function isPalindrome(str) {
        const word = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return word === word.split('').reverse().join('')
    }

    function checkPalindrome(input) {
        if(isPalindrome(input)){
            console.log('The string is a palindrome')
        }
        else {
            console.log('The string is not a palindrome')
        }
    }
    
    checkPalindrome('World')
    checkPalindrome('Mom')

})

