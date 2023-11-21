import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Login extends BasePage{
private username: Locator;
private password: Locator;
private submit : Locator;

constructor (page : Page){
    super(page)
    this.username = page.locator("//input[@name='username']")
    this.password = page.locator("//input[@name='password']")
    this.submit = page.locator("//button[@type='submit']")
    this.init()
}

init = async () => await this.page.waitForLoadState();



 async sign_in(password:string ,username:string){
await  this.username.fill(username) 
await this.password.fill(password)
await this.submit.click();

}




}