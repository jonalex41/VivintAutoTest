import MainPage from '../pageobjects/main.page.js'
import helpIcon from '../pageobjects/helpIcon.js'
import loginPage from '../pageobjects/loginPage.js'
import addItemToCart from '../pageobjects/addToCart.js'

describe('Main page exploratory test', () => {
    it('Verify content aligns with layout, and links work as expected.', async () => {
        await MainPage.navToPage('')
        await MainPage.checkLinks()
        await addItemToCart.allItems()
    })
})

describe('Test help button', () => {
    it('navigate the test help icon.', async () => {
        await helpIcon.testHelpButton()
    })
})

describe('User Security Test for vivint users', () => {
    it('Check login test.', async () => {
        await loginPage.tryAllLogins()
    })
})
