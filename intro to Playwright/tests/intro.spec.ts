import { test, expect, chromium } from '@playwright/test';

test("intro test assignment",async () =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.activetrail.com/free-trial/')
    const Email = page.locator("//input[@name='your-email']")
    const Password = page.locator("//input[@name='password']")
    const First_Name = page.locator("//input[@name='your-name']")
    const Telephone_number = page.locator("//input[@name='your-tel-base']")
    const Terms_and_conditions = page.locator("//span[@class='checkmark']")
    const submit = page.locator("//input[@type='submit']")

    await Email.fill('invalid_email')
    // await page.fill('input[name=email]', 'invalid_email');
    await submit.click()
    // await page.click('button[type=submit]');
    await expect(page.locator("//label[@id='your-email-error']")).toHaveText('Invalid value.');
  
    // // Test legal email
    // await page.fill('input[name=email]', 'valid_email@example.com');
    // await page.click('button[type=submit]');
    // await expect(page.locator('.error-message')).not.toHaveText('Please enter a correct email address.');
  
    // // Test missing email
    // await page.fill('input[name=email]', ''); // Clear the email field
    // await page.click('button[type=submit]');
    // await expect(page.locator('.error-message')).toHaveText('Email is required.');




});