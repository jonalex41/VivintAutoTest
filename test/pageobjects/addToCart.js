import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { $$ } from '@wdio/globals'
import doAction from './base.js'

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

    async doorCamera () {
        await doAction.hoverOver(this.cameras)
        await this.doorCamLnk.waitForDisplayed({timeout: 3000})
        await doAction.clickOn(this.doorCamLnk)
        await doAction.scrollPage(300)
    }

    async securityCamera () {
        // finish for selecting the security camera option
    }

    async securitySensors () {
        // finish for selecting the security sensors option
    }
}

export default new addItemToCart();