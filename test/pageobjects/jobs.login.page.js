import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js'
import userInfo from '../security/userInfo.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobsLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('//input[@data-automation-id="email"]'); }
    get inputPassword () { return $('//input[@data-automation-id="password"]'); }
    get btnSubmit () { return $('//div[@data-automation-id="click_filter"]'); }
    get jobOpenings () { return $('//a[@href="https://vivint.wd5.myworkdayjobs.com/vivintjobs"]'); }
    get signInBtn () { return $('//button[@data-automation-id="utilityButtonSignIn"]') }
    
    async viewJobOpenings () { 
        await this.jobOpenings.click()
        await browser.pause(400)
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.signInBtn.click()
        await this.btnSubmit.waitForExist({timeout: 1000})
        await expect(this.inputUsername).toExist()
        await expect(this.inputPassword).toExist()
        await expect(this.btnSubmit).toExist()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await browser.pause(500)
        await this.btnSubmit.waitForClickable({setTimeout: 600})
        await this.btnSubmit.click()
        await browser.pause(500)
    }

    async tryAllLogins() {
        for (let i = 0; i < userInfo.jobLogins.length; i++) {
            await this.openPage()
            await browser.pause(500)
            await this.login(userInfo.jobLogins[i].name, userInfo.jobLogins[i].password)
            await browser.pause(3000)
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async openPage () {
        return super.navTo('https://vivint.wd5.myworkdayjobs.com/vivintjobs');
    }

}

export default new JobsLoginPage();
