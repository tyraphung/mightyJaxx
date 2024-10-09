import { Page, expect } from '@playwright/test'
import { homePageLocators } from "../locators/homePageLocators";

export class HomePage extends homePageLocators{

  constructor(page: Page) {
    super(page)
  }
  async visitHomePage(url: any) {
    await this.page.goto(url)
  }
  async closePopUp() {
    await expect(this.popUp).toBeVisible()
    await this.closeButton.click()
  }

  async clickOnBlogsButton() {
    await this.blogsButton.click()    
  }

  async clickOnAboutUs() {
    await this.aboutUsButton.click()
  }

}
