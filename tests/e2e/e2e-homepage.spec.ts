import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { assertUrl, screenshot } from '../../utils/helpers'

test.describe('When user is at Home page then they can navigate to another pages', () => {
  // Negative Scenario
  test('Negative Scenario for About Us page and Blogs page Then take a screenshot', async ({ context,page }) => {
    let homePage: HomePage = new HomePage(page)

    await homePage.visitHomePage() // Open home page
    await homePage.closePopUp()
    await screenshot(page, 'homepage')

   // Clicks on about us button will open a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      homePage.clickOnAboutUs()
    ]) 
 
    // Verify the url is correct then take a screenshot for 'About Us' screen
    await assertUrl(newPage, 'https://www.mightyjaxxgroup.com/')
    await screenshot(newPage, 'aboutUs')
    // Close the new tab and come back the home screen
    await newPage.close()

    await homePage.clickOnBlogsButton()
    // Verify the url is correct then take a screenshot for 'Blogs' screen
    await assertUrl(page, 'https://www.mightyjaxx.com/blogs')
    await screenshot(page, 'blogs')
  })
})
