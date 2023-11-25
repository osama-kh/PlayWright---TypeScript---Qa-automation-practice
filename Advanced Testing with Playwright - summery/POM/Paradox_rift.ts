import { Page } from "@playwright/test";
import { base_page } from "./base_page";

export class Paradox_rift extends base_page{

    private cards ='card '
constructor(page :Page){
    super(page)
    this.init()
}
check_elements = async(num : number)=>{
    // await this.page.waitForSelector(".collectionbox")
    // const elements =  this.page.locator("//div[@class = 'card ']").all()
    const elementsWithSpecificClass = await this.page.$$('.card .checkbox');

    // Log the text content of each element
    for (const element of elementsWithSpecificClass) {
    //   const textContent = await element.textContent();
    console.log(element)
      console.log('Element Text Content:', await element.isChecked());
    }
  
    // // Check the checkboxes for the specified number of elements
    // for (let i = 0; i < num && i < elementsWithSpecificClass.length; i++) {
        
    //   await elementsWithSpecificClass[i].check();
    // }
  
    // Reload the page after checking the checkboxes
    await this.page.reload();



}
}