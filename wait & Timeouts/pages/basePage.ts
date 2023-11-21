import { Page } from "playwright";

export class basePage{

protected page :Page;
constructor(page : Page){
this.page =page
}

init = () =>this.page.waitForLoadState("load");

}