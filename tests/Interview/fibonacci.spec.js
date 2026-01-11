import {test} from '@playwright/test'

test('Fibonacci series', async({page}) => {
    function fibonacci(n){
        let a = 0, b = 1, result;         
        for (let i = 1; i <= n; i++) {
            console.log(a);
            result = a + b;
            a = b;
            b = result;
        }
    }
    fibonacci(6);
})