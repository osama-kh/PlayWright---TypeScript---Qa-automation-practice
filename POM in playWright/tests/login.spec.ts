import { test, expect } from '@playwright/test';
import{Login} from "../pages/Login"
test('log in successed', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
    const signin = new Login(page)
    await signin.sign_in('admin123', 'Admin')
  expect(page.url()).toEqual("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
});