import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js'
import navBar from './navBar.js'
import doAction from './base.js'

/**
 * Class for testing of the Vivint web site.
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginLnk () { return $('div.right a.login-link'); }
    get siteLogo () { return $('a.site-logo'); }
    get cartLogo() { return $('//p[@id="cart-icon-default"]'); }
    get searchIcon () { return $('button.search-icon.open-search-js'); }

    bottomNavBoxes = ['nav#block-productsandservices > ul', 'nav#block-solar > ul', 
        'nav.menu--support', 'nav#block-getvivint > ul' ]

    async checkLinks () {
        await browser.setWindowSize(1800, 1000)
        await this.sideLinks()
        await navBar.checkNavBar() // function in navBar.js
        await this.bottomLinks()
    }

    async sideLinks () {
        await expect(this.siteLogo).toBeDisplayed()
        await expect(this.loginLnk).toBeDisplayed()
        await expect(this.cartLogo).toBeDisplayed()
        await expect(this.searchIcon).toBeDisplayed()
    }

    async bottomLinks () {
        await browser.scroll(0, 8050)
        for (let i = 0; i < this.bottomNavBoxes.length; i++) {
            await expect($(this.bottomNavBoxes[i])).toExist()
        }
    }

    async navToPage (ext) {
        return super.navTo('https://www.vivint.com' + ext)
    } 

    async clickOn (elem) {
        await browser.action('pointer')
            .move({duration: 300, origin: elem, x: 7, y: 5})
            .pause(200)
            .down({ button: 0 }) // left button
            .pause(12)
            .up({ button: 0 })
            .perform()
    }

    async hoverOver (elem) {
        await browser.action('pointer')
            .move({ duration: 300, origin: elem, x: 7, y: 6})
            .pause(500)
            .perform()
    }

    async scrollPage (y) {
        await browser.action('wheel').scroll({
            deltaX: 0,
            deltaY: y,
            duration: 200
        }).perform()
    }
}

export default new MainPage();
