import test, { expect } from "playwright/test";
import {mainPage} from "../pages/mainPage"

test("hover",async({page})=>{
test.setTimeout(160000)
    await page.goto('https://www.tase.co.il/he',{timeout:30000*2})
const main = new mainPage(page)
// await main.HoverByMouse()
await main.press_on_stat()
// await main.printx()
// page.close()
// main.clickOnStatistics()
    
})


// test('keyboard and mouse spotcheck', async ({page}) => {
//     // Navigate to the page with the drag and drop element
//     await page.goto('https://the-internet.herokuapp.com/hovers')
//     // Locate the source and target elements
//     const user =
//          page.locator('//div[./div[./h5[contains(text(),"user1")]]]//img')
//     // Get the bounding boxes of the elements
//     const userBox = await user.boundingBox()
//     // Drag the source element to the target element
//     await page.mouse.move(userBox!.x + userBox!.width / 2,
//         userBox!.y + userBox!.height / 2)
//     await expect(page.locator('//a[@href="/users/1"]')).toBeVisible()
// })


  test.describe('Test suite with fixtures', () => {
    test('browser fixture',async ({browser}) => {
       const context = await browser.newContext()
       const page = await context.newPage()
       await page.goto('https://www.example.com')
       const text = await page.locator('//h1').innerText()
       expect(text).toBe('Example Domain')
    })
    test('browser context fixture',async ({context}) => {
        const page = await context.newPage()
        await page.goto('https://www.example.com')
        const text = await page.locator('//h1').innerText()
        expect(text).toBe('Example Domain')
    })
    test('page fixture', async ({page}) => {
      await page.goto('https://www.example.com')
      const text = await page.locator('//h1').innerText()
      expect(text).toBe('Example Domain')
  })
})