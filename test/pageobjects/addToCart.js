import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { $$ } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class addItemToCart {

    option = 0;

    get cameras() { return $('div.left a.nav-accordion-title[href="/packages/security-cameras"]') }
    get doorCamLnk() { return $('div.left a.nav-dropdown-title[href="/packages/security-cameras"]') }
    get doorCamAdd() { return $('a.desktop-text[href="https://www.vivint.com/shop/quiz/package-builder?ca=51292922"]') } 
    get doorCamOption() { return $$('div.choices > button.vc-button')[this.option] } 
    get securityCamLnk() { return $('a.desktop-text[href="/products/outdoor-camera"]') }

    async allItems() {
        await browser.setWindowSize(1400, 1000)
        await this.doorCamera()
        await this.secutityCamera()
        await this.securitySensors()
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

    async doorCamera () {
        await this.hoverOver(this.cameras)
        await this.doorCamLnk.waitForDisplayed({timeout: 3000})
        await this.clickOn(this.doorCamLnk)
        await this.scrollPage(300)
    }

    async securityCamera () {
        // finish for selecting the security camera option
    }

    async securitySensors () {
        // finish for selecting the security sensors option
    }
}

export default new addItemToCart();