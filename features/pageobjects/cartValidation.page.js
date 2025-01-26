import { $, expect } from '@wdio/globals';
import Page from './page';

class cartValidationPage extends Page {
    open() {
        return super.open('cart.html'); // Halaman cart
    }

    get cartBadge() {
        return $('[data-test="shopping-cart-badge"]');
    }

    async waitForCartBadge() {
        await this.cartBadge.waitForExist({ timeout: 5000 }); // Tunggu elemen ada
    }

    async getText() {
        // Ambil teks setelah menunggu elemen tersedia
        const text = await this.cartBadge.getText();
        console.log(`Cart Badge Text: ${text}`); // Debug log
        return text;
    }

    async validateCartBadgeValue() {
        // Validasi bahwa teks badge adalah "1"
        await expect(this.cartBadge).toHaveText('1');
    }
}

export default new cartValidationPage();
