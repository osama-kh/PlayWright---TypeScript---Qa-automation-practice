import { Page } from "@playwright/test";

export class base_page{

protected page :Page;

constructor (page : Page){
this.page = page;
}

protected init = async() => await this.page.waitForLoadState("load"); 

}