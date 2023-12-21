 import { browser } from '@wdio/globals'
 import doAction from './base.js'

/**
* Testing the help icon for usability
*/
class helpIcon {
    
    get helpFrame () { return $('div#drift-frame-controller'); }
    get helpIframe () { return $('div#drift-frame-controller > iframe.drift-frame-chat') }
    get helpTextArea () { return $('div#root textarea'); }

    async testHelpButton () {
        await browser.setWindowSize(1700, 1000)
        await doAction.clickOn(this.helpFrame)
        await browser.pause(2000) // nessesary to allow input to be active
        await doAction.keyThis('testing')
    }
}

export default new helpIcon();
