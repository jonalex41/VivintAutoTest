 import { browser } from '@wdio/globals'

/**
* Testing the help icon for usability
*/
class doAction {

    async clickOn (thing) {
        await browser.setWindowSize(1700, 1000)
        await browser.action('pointer')
            .move({ duration: 200, origin: thing, x: 3, y: 3 })
            .down({ button: 0 }) // left button
            .pause(30)
            .up({ button: 0 })
            .perform()
    }

    async hoverOver (thing) {
        await browser.action('pointer')
            .move({ duration: 200, origin: thing, x: 3, y: 3 })
            .pause(200)
            .perform()
    }
    
    async keyThis (word) {
        for (let i = 0; i < word.length; i++) {
            await browser.action('key')
                .down(word[i])
                .pause(20)
                .up(word[i])
                .perform()
        }
    }

    async scrollPage (y) {
        await browser.action('wheel').scroll({
            deltaX: 0,
            deltaY: y,
            duration: 200
        }).perform()
    }
}

export default new doAction();
