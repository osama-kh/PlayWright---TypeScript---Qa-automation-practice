import test, { Browser, Page, chromium, expect } from "@playwright/test"
import { beforeEach } from "node:test"
import { main_page } from "../POM/main_page"
import { equal } from "node:assert"
import { config } from "node:process";
import { searchPage } from "../POM/searchPage";



const launchBrowser = async (): Promise<{ browser: Browser, page: Page }> => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    return { browser, page };
};

const launchPage =  async (page:Page) : Promise<main_page>=> {
    test.setTimeout(160000)  
    await page.goto("https://www.pokellector.com/")
    const main = new main_page(page)
    return main
}

test.describe('My test suite', () => {
    let browser: Browser;
    let page: Page;
    
    test.beforeEach(async () => {
        ({ browser, page } = await launchBrowser());
    });

    test.afterEach(async () => {
        await browser.close();
    });




    test("check if view all button redirect to all sets",async () => {
        test.setTimeout(160000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
        // const main =launchPage(page) 
        await main.click_on_VIEW_ALL_button()
        expect(page.url()).toEqual("https://www.pokellector.com/sets")
    })
    
    
    test("check if view more button in paradox rift redirect to paradox rift set",async () => {
        test.setTimeout(160000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
    
        await main.click_on_PARADOX_RIFT()
        expect(page.url()).toEqual("https://www.pokellector.com/Paradox-Rift-Expansion")
    })
    
    test("check if view more button in Scarlet & Violet  redirect to  Scarlet & Violet set",async () => {
        test.setTimeout(160000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
    
        await main.click_on_scarlet_and_violate()
        expect(page.url()).toEqual("https://www.pokellector.com/Scarlet-Violet-151-Expansion")
    })
    
    test("check if view more button in McDonalds-2023-Expansion redirect to McDonalds-2023-Expansion set",async () => {
        test.setTimeout(160000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
    
        await main.click_on_mcdonalds_exp()
        expect(page.url()).toEqual("https://www.pokellector.com/McDonalds-2023-Expansion")
    })


    test("to check if the paradox rift checked cards count equal to the green count",async ()=>{
        test.setTimeout(200000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
        await main.Enter_to_paradox_rift()
        // await main.get_paradox_rift().checkAllAndReload(page)
        const cards_count = await main.get_paradox_rift().checkAndReload(page)
        const green_count = await main.get_paradox_rift().green_count()
        expect(cards_count).toEqual(Number(green_count))
        // console.log(cards_count)
        // console.log(green_count)
    })

    test("to check the search bar ",async()=>{
        test.setTimeout(200000)
        await page.goto("https://www.pokellector.com/")
        const main = new main_page(page)
        await main.search_bar_input("os")
        const search =new searchPage(page)
        await search.get_search_info()


    })



});

