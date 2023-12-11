import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginBtn () { return $('div.right a.login-link');; }
    get siteLogo () { return $('a.site-logo'); }
    get cartLogo() { return $('//p[@id="cart-icon-default"]') }
    get searchIcon () { return $('button.search-icon.open-search-js') }
    // get homeSecTitle () { return $('h1 span.white'); }
    // get verifyHuman () { return $('//input[@type="checkbox"]') }
 
    async goToLogin () {
        await browser.pause(400)
        await this.loginBtn.click()
    }

    async checkLinks () {
        await expect(this.siteLogo).toExist()
        await expect(this.loginBtn).toExist()
        await expect(this.cartLogo).toExist()
        await expect(this.searchIcon).toExist()
        await browser.pause(500)
    }

    // async goToCareers () {
    //     await browser.pause(400)
    //     await expect(this.careersLnk).toBeExisting()
    //     await this.careersLnk.click()
    //     await browser.pause(7023)
    //     // await this.verifyHuman.click()
    // }

    async openPage () {
        return super.open('https://www.vivint.com');
    } 
}

export default new MainPage();
