import { chromium } from 'playwright'; 
import {expect, test} from '@playwright/test'

// test('browser and context spot check', async () => {
//       // Create a new browser instance
//   const browser = await chromium.launch();
//   // Create a new browser context
//   const context = await browser.newContext();
  
//     const persistentContext = await chromium
//                                 .launchPersistentContext('myUserData');
//     const page = await persistentContext.newPage();
//     await page
//       .goto('https://practicetestautomation.com/logged-in-successfully/');
//     const header = page.locator('//h1');
//     expect(header).toContainText('Logged In Successfully')
// })
test("nj",async () => {
  // Launch a new browser instance
  const browser = await chromium.launch();
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();
  // Navigate to a website
  await page.goto('https://www.example.com');
  // Find and click a button using a CSS selector
  const button = await page.locator('button');
  await button.click();
  // Find a form field and fill it in
  const input = await page.locator('#search-box');
  await input.fill('test search');
  // Get the text content of an element
  const header = await page.locator('h1');
  const textContent = await header.textContent();
  console.log(`The header text is: ${textContent}`);
  // Close the browser
  await browser.close();
});

test('should login with valid credentials', async () => {
  const browser = await chromium.launch();
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  const userName = page.locator('//input[@id="username"]');
  const password = page.locator('//input[@id="password"]');
  const loginButton = page.locator('//button[@id="submit"]')
  await userName.fill('student');
  await password.fill('Password123');
  await loginButton.click();
  const url = page.url();
  const pageTitle = await page.title();
  const header = page
            .locator('//h1[contains(text(),"Logged In Successfully")]');
  expect(url).toContain('logged-in-successfully');
  expect(pageTitle)
          .toEqual('Logged In Successfully | Practice Test Automation');
  expect(await header.isVisible()).toBeTruthy();
});