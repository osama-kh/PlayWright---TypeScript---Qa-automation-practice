import { Page } from "@playwright/test";
import { base_page } from "./base_page";

export class searchPage extends base_page{
private search_info:string ='//div[@id = "columnLeft"]/h1[2]'
constructor(page:Page){
    super(page)
    // this.init()
}

public async get_search_info():Promise<void>{
  const x= await this.page.waitForSelector(this.search_info,{state:"visible"})  
  console.log(x.textContent())
this.page.locator(this.search_info)

    
}





}