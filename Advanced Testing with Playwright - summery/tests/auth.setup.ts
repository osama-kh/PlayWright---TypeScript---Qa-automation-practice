import { test as setup, expect } from '@playwright/test';
import { config } from 'node:process';
import test from 'node:test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  setup.setTimeout(160000)
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.pokellector.com/signin');
  await page.locator("//input[@name='username']").fill('osama99');
  await page.locator("//input[@name='password']").fill('Osama99');
  await page.locator("//button[@type='submit']").click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.pokellector.com/my-account');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("//a[@class = 'username']")).toContainText("osama99")

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});