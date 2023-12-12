// import { expect } from '@wdio/globals'
import JobsLoginPage from '../pageobjects/jobs.login.page.js'
import MainPage from '../pageobjects/main.page.js'

describe('Main page exploratory test', () => {
    it('Verify content aligns with layout, and links work as expected.', async () => {
        await MainPage.openPage('')
        await MainPage.checkLinks()
        // await MainPage.testHelpButton()
        await MainPage.tryAllLogins()
        // await MainPage.clickLoginBtn()
        // await MainPage.login('test@yahoo.com', 'testPassword')
    })
})

describe('Login test page.', () => {
    it('Test logging into the Vivint jobs page.', async () => {
        await JobsLoginPage.tryAllLogins()
        // await JobsLoginPage.openPage()
        // await JobsLoginPage.login('test@yahoo.com','test')
        // await JobsLoginPage.openPage()
        // await JobsLoginPage.login('admin', 'password')
    })
}) 

