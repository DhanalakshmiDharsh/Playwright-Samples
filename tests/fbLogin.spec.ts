import {test, expect} from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async({page})  =>{

    await page.goto('/')
})

test('logIn page', async({page}) =>{
    await page.getByPlaceholder('Email address or phone number').click()
    await page.getByLabel('Email address or phone number').fill('9952595664')
    await page.getByPlaceholder('Password').click()
    await page.getByPlaceholder('Password').fill('yara@786')
    await page.getByRole('button', {name:"Log in"}).click()

    //Next action
    await page.getByRole('checkbox', {name:"I'm not a robot"}).click({force:true})
    await page.getByRole('button', {name:"Add Picture"}).click()
  



    


    



})
