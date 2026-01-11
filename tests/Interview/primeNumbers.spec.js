import {test, expect} from '@playwright/test'

test('finiding prime numbers', async({page}) => {

    for(let num = 2; num<=50; num++){

        let isPrime = true
        for(let i = 2; i < num; i++){
            if(num % i ===0)
                return isPrime = false
            break

        }
    
    }
    if(isPrime){
        console.log(num)
    }
    
})
