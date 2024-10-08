import { expect } from '@playwright/test'


export async function loadHomepage(page) {
  await page.goto('https://www.mightyjaxx.com/')
}

export async function assertTitle(page) {
  await page.waitForSelector('h5')
}

export async function screenshot(page, name: string) {
  await page.screenshot({ path:`./screenshots/image_${name}.png`, fullPage: true })
}

export async function assertUrl(page, url: any) {
  await expect(page).toHaveURL(url)
}