 import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class helpIcon {
    /**
    * Testing the help icon for usability
    * 1738 938 mouse position for help icon.
    */
    // get helpButton () { return $('div.drift-controller-icon--active'); }
    // get answer3 () { return $('li[aria-posinset="3"] > button'); }
    get helpFrame () { return $('div#drift-frame-controller'); }
    // get header () { return $('header#header') }
    get helpIframe () { return $('div#drift-frame-controller > iframe.drift-frame-chat') }
    get helpTextArea () { return $('div#root textarea'); }
    // get root () { return $('#root') }

    async testHelpButton () {
        await browser.setWindowSize(1700, 1000)

        await browser.action('pointer')
            .pause(1000)
            .move({ duration: 200, origin: this.helpFrame, x: 0, y: 0 })
            .down({ button: 0 }) // left button
            .pause(30)
            .up({ button: 0 })
            .pause(1000)
            .perform()
        await browser.pause(4000)
        // await this.helpTextArea.click()
        await browser.action('key')
            .down('t')
            .pause(20)
            .down('r')
            .pause(20)
            .down('y')
            .pause(20)
            .up('t')
            .pause(20)
            .up('r')
            .pause(20)
            .up('y')

    }
}

export default new helpIcon();
