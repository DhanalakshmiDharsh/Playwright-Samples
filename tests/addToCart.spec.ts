import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) =>{
    await page.goto('https://www.amazon.in/')
})

test ('adding mobile to cart', async({page}) =>{
    await page.getByRole('searchbox', {name:"search"}).fill('mobile phones')
    await page.locator('[type="submit"]').click()
    // await page.getByRole('button', {name:"Continue shopping"}).click()
    // await page.getByRole('button', {name:"Go"}).click()
    // await page.locator('.a-size-base a-color-base').click()
    await page.getByRole('checkbox', {name:"Samsung"}).check()
    await page.getByRole('checkbox', {name:"Get It by Tomorrow"}).check()

    // drag and select slider
    const slider = page.locator('#p_36/range-slider_slider-item')
    await expect(slider).toBeVisible()

     const box = await slider.boundingBox()
    if(box){
    await page.mouse.move(box.x + box.width / 2 , box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + 100, box.y + box.height / 2, {steps:10})
    await page.mouse.up()
    }
    else{
        console.error('Slider bounding box was null. Check if the slider is visible.')
    }

})


