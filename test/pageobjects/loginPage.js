import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import userInfo from '../security/userInfo.js'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class loginPage {
    /**
    * Testing the login screen for 
    */
    get userName () { return $('#usernameField'); }
    get password () { return $('#passwordField'); }
    get logIn () {return $('button.rounded'); }
    get loginLnk () { return $('div.right a.login-link'); }

    async clickLoginBtn () {
        await browser.setWindowSize(1800, 1000)
        await browser.pause(500)
        await this.loginLnk.click()
        await browser.pause(500)
        await expect(browser).toHaveTitle(expect.stringContaining('Login'))
    }

    async login (user, pass) {
        await this.userName.setValue(user)
        await this.password.setValue(pass)
        await browser.pause(500)
        await this.logIn.waitForClickable({setTimeout: 700})
        await this.logIn.click()
        await browser.pause(500)
        await expect($('#form-error')).toExist() //.toHaveText(expect.stringContaining('Invalid email or password.'))
    }

    async tryAllLogins() {
        await this.clickLoginBtn()
        await browser.pause(500)
        for (let i = 0; i < userInfo.userLogins.length; i++) {
            await this.login(userInfo.userLogins[i].name, userInfo.userLogins[i].password)
        }
    }
}

export default new loginPage();
