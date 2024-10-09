import { Locator, Page } from '@playwright/test'

export class homePageLocators {
  page: Page
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
}
