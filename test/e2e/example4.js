import test from 'ava'
import puppeteer from 'puppeteer'

let browser

test.before(async () => {
  browser = await puppeteer.launch(process.env.HEADLESS ? {} : { headless: false, slowMo: 20 })
})

test.after.always(() => browser.close())

for (var i = 0; i < 10; i++) {
  test(`example test ${i}`, exampleTest)
}

async function exampleTest (t) {
  const page = await browser.newPage()
  await page.goto('http://localhost:4321')
  await page.waitForSelector('[data-id=title]')

  let title = await page.$('[data-id=title]')
  let titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'Status')

  await page.click('nav a[href="/files"]')

  title = await page.$('[data-id=title]')
  titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'Files')

  await page.click('nav a[href="/ipld"]')

  title = await page.$('[data-id=title]')
  titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'IPLD')

  await page.click('nav a[href="/peers"]')

  title = await page.$('[data-id=title]')
  titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'Peers')

  await page.click('nav a[href="/settings"]')

  title = await page.$('[data-id=title]')
  titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'Settings')

  await page.click('nav a[href="/"]')

  title = await page.$('[data-id=title]')
  titleText = await page.evaluate(el => el.innerHTML, title)
  t.is(titleText, 'Status')
}
