import { test as setup, expect } from '@playwright/test';
import { config } from 'node:process';
import test from 'node:test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  setup.setTimeout(160000)
  await page.goto('https://www.pokellector.com/signin');
  await page.locator("//input[@name='username']").fill('osama99');
  await page.locator("//input[@name='password']").fill('Osama99');
  await page.locator("//button[@type='submit']").click();

  await page.waitForURL('https://www.pokellector.com/my-account');
  await expect(page.locator("//a[@class = 'username']")).toContainText("osama99")

  

  await page.context().storageState({ path: authFile });
});