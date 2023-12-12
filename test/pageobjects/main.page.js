import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';
import userInfo from '../security/userInfo.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginLnk () { return $('div.right a.login-link'); }
    get siteLogo () { return $('a.site-logo'); }
    get cartLogo() { return $('//p[@id="cart-icon-default"]'); }
    get searchIcon () { return $('button.search-icon.open-search-js'); }
    get menuBar () { return $('div.left nav.menu--main-navigation-2020 > ul'); }
    get homeSec () { return $('div.left nav.menu--main-navigation-2020 > ul > li > a[href="/packages/home-security"]'); }
// login selectors
    get userName () { return $('#usernameField'); }
    get password () { return $('#passwordField'); }
    get logIn () {return $('button.rounded'); }
// help button selectors
    get helpButton () { return $('div.drift-widget-avatar.circle'); }
    get answer3 () { return $('li[aria-posinset="3"] > button'); }
 
    async clickLoginBtn () {
        await browser.maximizeWindow()
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
        await expect($('#form-error')).toExist()//.toHaveText(expect.stringContaining('Invalid email or password.'))
    }

    async tryAllLogins() {
        await this.clickLoginBtn()
        await browser.pause(500)
        for (let i = 0; i < userInfo.userLogins.length; i++) {
            await this.login(userInfo.userLogins[i].name, userInfo.userLogins[i].password)
            await browser.pause(500)
        }
    }

    async checkLinks () {
        await expect(this.siteLogo).toExist()
        await expect(this.loginLnk).toExist()
        await expect(this.cartLogo).toExist()
        await expect(this.searchIcon).toExist()
        await expect(this.menuBar).toHaveChildren(5)
        // await browser.execute("mobile: scroll", {direction: 'down'})
        // await browser.pause(500)
        // await browser.execute("mobile: scroll", {direction: 'up'})
        // await browser.pause(500)
    }

    async testHelpButton () {
        await browser.pause(10000)
        await this.helpButton.waitForClickable(5000)
        await this.helpButton.click()
        await this.browser.pause(500)
        await this.answer3.waitForClickable(1000)
        await this.answer3.click()
        await this.browser.pause(500)
    }

    async openPage (path) {
        return super.navTo('https://www.vivint.com' + path);
    } 
}

export default new MainPage();
