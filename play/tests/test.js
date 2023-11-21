"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
const test_1 = require("@playwright/test");
(0, test_1.test)('browser and context spot check', async () => {
    // Create a new browser instance
    const browser = await playwright_1.chromium.launch();
    // Create a new browser context
    const context = await browser.newContext();
    const persistentContext = await playwright_1.chromium
        .launchPersistentContext('myUserData');
    const page = await persistentContext.newPage();
    await page
        .goto('https://practicetestautomation.com/logged-in-successfully/');
    const header = page.locator('//h1');
    (0, test_1.expect)(header).toContainText('Logged In Successfully');
});
