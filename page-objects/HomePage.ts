import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly aboutUsButton: Locator
  readonly blogsButton: Locator
  readonly popUp: Locator
  readonly closeButton: Locator

  constructor(page: Page) {
    this.page = page
    this.aboutUsButton = page.locator('text=About Us')
    this.blogsButton = page.locator('text=Blogs')
    this.popUp = page.locator(`[data-testid="POPUP"]`)
    this.closeButton = page.locator(`[aria-label="Close dialog"]`)
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
