import { Page } from "@playwright/test";
import { base_page } from "./base_page";
import { Paradox_rift } from "./Paradox_rift";

export class main_page extends base_page{

private VIEW_ALL_SETS_BUTTON :string ='//h1/a[@href = "/sets"]'  
private VIEW_MORE_PARADOX_RIFT : string ='//h1/a[@href = "/Paradox-Rift-Expansion"]'
private VIEW_MORE_SCARLET_AND_VIOLATE : string ='//h1/a[@href = "/Scarlet-Violet-151-Expansion"]'
private VIEW_MORE_MCDONALDS_EXP : string ='//h1/a[@href = "/McDonalds-2023-Expansion"]'
private paradox_rift: Paradox_rift ;

constructor (page : Page){
    super(page)
    this.paradox_rift = new Paradox_rift(page)
     this.init()
}
private click_on_button = async(text :string) => await this.page.locator(text).click();

public click_on_VIEW_ALL_button =  async ()=>await this.click_on_button(this.VIEW_ALL_SETS_BUTTON)

public click_on_PARADOX_RIFT = async () => await this.click_on_button(this.VIEW_MORE_PARADOX_RIFT)

public click_on_scarlet_and_violate = async () => await this.click_on_button(this.VIEW_MORE_SCARLET_AND_VIOLATE)

public click_on_mcdonalds_exp = async () => this.click_on_button ( this.VIEW_MORE_MCDONALDS_EXP)

public Enter_to_paradox_rift = async () => {
    await this.click_on_PARADOX_RIFT()
    // await this.paradox_rift.check_elements(3)
}

get_paradox_rift =  () : Paradox_rift=> {
return this.paradox_rift
}


public  async search_bar_input (text:string):Promise<void>{
  
const search_bar = await this.page.waitForSelector('//input [@name="criteria"]')
await search_bar.fill(text)
const search_button = this.page.locator('//input [@type="image"]')
await search_button.click()

}





}