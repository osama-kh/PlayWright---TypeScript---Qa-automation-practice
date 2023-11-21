import test from "playwright/test";
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