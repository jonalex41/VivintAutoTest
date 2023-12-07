import { $ } from '@wdio/globals'
import Page from './page.js'
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobsLoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#usernameField'); }
    get inputPassword () { return $('#passwordField'); }
    get btnSubmit () { return $('button[@type="button"]'); }
    get jobOpenings () { return $('//a[@href="https://vivint.wd5.myworkdayjobs.com/vivintjobs"]'); }
    
    async viewJobOpenings () { 
        await browser.pause(400)
        await this.jobOpenings.click()
        await browser.pause(400)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openPage () {
        return super.open('/ppc/home');
    }
}

export default new JobsLoginPage();
