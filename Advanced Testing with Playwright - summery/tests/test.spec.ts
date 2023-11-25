import test, { Browser, Page, chromium, expect } from "@playwright/test"
import { beforeEach } from "node:test"
import { main_page } from "../POM/main_page"
import { equal } from "node:assert"



const launchBrowser = async (): Promise<{ browser: Browser, page: Page }> => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://www.pokellector.com/")
    return { browser, page };
};

const launchPage =  (page:Page) : main_page=> {
    test.setTimeout(160000)
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
        // test.setTimeout(160000)
        // await page.goto("https://www.pokellector.com/")
        // const main = new main_page(page)
        const main =launchPage(page)
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





});







