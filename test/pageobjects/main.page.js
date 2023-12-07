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
    get loginBtn () { return $('a.login-link'); }
    get careersLnk () { return $('//a[@href="https://www.vivint.com/company/careers"]'); }
    get siteLogo () { return $('a.site-logo'); }
    get homeSecuity () { return $x('//li/a[@href="/packages/home-security"]')[0]; }
    get homeSecTitle () { return $('h1 span.white'); }
    get verifyHuman () { return $('//input[@type="checkbox"]') }
 
    async goToLogin () {
        await browser.pause(400)
        await this.loginBtn.click()
    }

    async checkLinks () {
        await expect(this.siteLogo).toExist()
        // await expect(this.homeSecurity).toExist()
        await browser.pause(500)
        await this.homeSecuity.click()
        await browser.pause(500)
        await expect(homeSecTitle).toHaveText(expect.stringContaining('BEST SMART HOME SECURITY SYSTEMS'))
        await browser.pause(500)
        await this.siteLogo.click()
        await browser.pause(500)

    }

    async goToCareers () {
        await browser.pause(400)
        await expect(this.careersLnk).toBeExisting()
        await this.careersLnk.click()
        await browser.pause(820)
        await this.verifyHuman.click()
    }

    async openPage () {
        return super.open('');
    }
}

export default new MainPage();
