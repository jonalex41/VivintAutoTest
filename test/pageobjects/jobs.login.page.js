import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js'
import userInfo from '../security/userInfo.js' // secure file for user login information.

/**
 * Automate the jobs login page for Vivint.
 */
class JobsLoginPage extends Page {
    get inputUsername () { return $('//input[@data-automation-id="email"]'); }
    get inputPassword () { return $('//input[@data-automation-id="password"]'); }
    get btnSubmit () { return $('//div[@data-automation-id="click_filter"]'); }
    get jobOpenings () { return $('//a[@href="https://vivint.wd5.myworkdayjobs.com/vivintjobs"]'); }
    get signInBtn () { return $('//button[@data-automation-id="utilityButtonSignIn"]') }
    get userIcon () { return $('div[data-automation-id="utilityButtonAccountTasksMenu"]') }
    get signOut () { return $('button#item1') }
    
    async viewJobOpenings () { 
        await this.jobOpenings.click()
        await browser.pause(400)
    }
    /**
     * a method to login using username and password
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
            await browser.pause(1000)
        }
        await this.clickLogout()
    }

    async clickLogout() {
        await browser.action('pointer')
            .pause(1000)
            .move({ duration: 200, origin: this.userIcon, x: 3, y: 3 })
            .down({ button: 0 }) // left button
            .pause(30)
            .up({ button: 0 })
            .perform()
        await this.signOut.waitForDisplayed({timeout: 5000})
        await browser.action('pointer')
            .move({ duration: 200, origin: this.signOut, x: 3, y: 3 })
            .down({ button: 0 }) // left button
            .pause(30)
            .up({ button: 0 })
            .perform()
        await browser.pause(1000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async openPage () {
        return super.navTo('https://vivint.wd5.myworkdayjobs.com/vivintjobs');
    }

}

export default new JobsLoginPage();
