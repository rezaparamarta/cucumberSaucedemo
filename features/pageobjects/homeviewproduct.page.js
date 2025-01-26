import { $, browser, expect } from '@wdio/globals';
import Page from './page';

class homeViewProductPage extends Page {
    // Selectors
    open() {
        return super.open('inventory.html'); // Navigates to the cart page
    }

    get itemName() {
        return $('[data-test="inventory-item-name"]');
    }

    get addToCartButton() {
        return $('#add-to-cart');
    }

    async clickitemName() {
        await this.itemName.click();
    }


    async validateChooseItem() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await browser.pause(2000);
    }

    async addToCartButtonClick() {
        await this.addToCartButton.click();
        await browser.pause(2000);
    }
}

export default new homeViewProductPage();