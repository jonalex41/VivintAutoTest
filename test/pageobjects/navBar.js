import { $ } from '@wdio/globals'
import { $$ } from '@wdio/globals'
import { browser } from '@wdio/globals'
// import Page from './page.js';

/**
 * Class for testing of the Vivint web site.
 */
class navBar {
    /**
     * define selectors using getter methods
     */
    navLinks = ['div.left a.nav-accordion-title[href="/packages/home-security"]', 
        'div.left a.nav-accordion-title[href="/packages/security-cameras"]',
        'div.left a.nav-accordion-title[href="/packages/home-automation"]',
        'div.left a.nav-accordion-title[href="/services"]',
        'div.left a.nav-slideout-bold[href="/how-to-buy"]'];
    navLink = "";

    get navItem () { return $(this.navLink); }
    get menuBar () { return $('div.left nav.menu--main-navigation-2020 > ul'); }
    get mainNavLi () { return $$('div.left > nav.block > ul > li'); }
    
    async checkNavItem () {
        await expect(this.navItem).toBeExisting();
        await browser.action('pointer')
            .pause(100)
            .move({ duration: 100, origin: this.navItem, x: 5, y: 5})
            .pause(200)
            .perform()
        await browser.pause(200)
    }

    async checkNavBar () {
        // await browser.setWindowSize(1800, 1000);
        await expect(this.menuBar).toHaveChildren(5)
        const mainNav = await this.mainNavLi;
        for (let i = 0; i < mainNav.length; i++) {
            await expect(mainNav[i]).toBeDisplayed()
            await expect(mainNav[i]).toHaveElementProperty('role', 'menuitem')
            await expect(mainNav[i]).toHaveChildren(2)
        }
        for (let i = 0; i < this.navLinks.length; i++) {
            this.navLink = this.navLinks[i];
            await this.checkNavItem()
        }
        await browser.setWindowSize(1100, 1000)
        await browser.pause(500)
        for (let i = 0; i < mainNav.length; i++) {
            await expect(mainNav[i]).not.toBeDisplayed()
        }
    }
}

export default new navBar();
