import { Page } from "@playwright/test";
import { base_page } from "./base_page";

export class Paradox_rift extends base_page{

    
    constructor(page :Page){
        super(page)
        this.init()
    }

public async checkAndReload(page:Page): Promise<number> {

    // const cardElements = await page.$$('.card  .checked');
    // const cardElementss = await page.$$('.card ');
    const cardElements = await page.locator('//div[@class="card  checked" ]').count();
  // const cardElementss = await page.locator('//div[@class="card " ]').count();

    console.log(cardElements)
    // const green_count =await this.page.locator("//div/strong[@class='green']").textContent()
    // console.log(await this.page.locator("//div/strong[@class='green']").textContent())

    return cardElements
    // console.log(cardElementss)
    // for (const cardElement of cardElements) {
    //   const textContent = await cardElement.textContent();
    //   console.log('Card Text Content:', textContent);
  
    //   const checkboxElements = await cardElement.$$('.checkbox');
  
    //   for (let i = 0; i < num && i < checkboxElements.length; i++) {
    //     await checkboxElements[i].hover()
    //     await checkboxElements[i].click()
    //   }
    // }
    //   await page.reload();
  }
  public green_count =async ()=> await this.page.locator("//div/strong[@class='green']").textContent()




  
public async checkAllAndReload(page: Page): Promise<void> {

    const cardElements = await page.waitForSelector('//div//button[@class="checkall"]')
    await cardElements.click()
    // await page.locator('//div//button[@class="checkall"]').click()
    page.on('dialog', async (dialog) => {
        await dialog.accept();
      });
  
      await page.reload();


     console.log(await page.locator("//div/strong[@class='green']").textContent())
  }
  

}



