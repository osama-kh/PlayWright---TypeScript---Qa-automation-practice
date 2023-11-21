import { Locator, Page } from "playwright";
import { basePage } from "./basePage"
import { expect } from "playwright/test";

export class mainPage extends basePage{

//  private readonly COMMERCE_AND_DATA_BARELEMENT_LOC: string = "a[data-text='מסחר ונתונים']";
 private readonly STATISTICS_OPEN_TAB_LOC: string = "h5:has-text('סטטיסטיקות מסחר')";
    data:Locator;
 constructor(page : Page){
    super(page);
    this.data = page.getByText('מסחר ונתונים').nth(0);
    // this.data = page.locator("//nav/tase-popover[1]/a")
}

HoverByMouse = async () => {
    // await expect(this.data).toBeVisible()
    await this.data.hover()}
printx = async() =>  console.log(await this.data.textContent())
press_on_stat = async() => {
    await this.HoverByMouse()
    // await this.page.getByText('סטטיסטיקות מסחר').waitFor()
    const statistics =  this.page.locator(this.STATISTICS_OPEN_TAB_LOC)
     
    // this.statistics =  this.page.locator("//h5[@text()='סטטיסטיקות מסחר']")
    // console.log(await this.statistics.textContent())
    await statistics.click()

}


// async clickOnStatistics() {
//     const commerceUpperBar = this.page.locator(this.COMMERCE_AND_DATA_BARELEMENT_LOC);
//     await commerceUpperBar.hover();

//     const statistics = this.page.locator(this.STATISTICS_OPEN_TAB_LOC);
//     await statistics.click();
//     this.init()

// }
}
