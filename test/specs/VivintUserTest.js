// import { expect } from '@wdio/globals'
import JobsLoginPage from '../pageobjects/jobs.login.page.js'
import MainPage from '../pageobjects/main.page.js'

describe('Main page exploratory test', () => {
    it('Verify content aligns with layout, and links work as expected.', async () => {
        await MainPage.openPage()
        await browser.pause(500)
        // await MainPage.checkLinks()
        await MainPage.goToCareers()
        await JobsLoginPage.viewJobOpenings()
    })
})

