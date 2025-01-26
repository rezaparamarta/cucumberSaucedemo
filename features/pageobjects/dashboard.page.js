import Page from './page';
import { $, expect } from '@wdio/globals';

class DashboardPage extends Page {
    // Function to open the homepage
    open() {
        return super.open('inventory.html'); // Navigates to the inventory page
    }

    get dashboardTitle() {
        return $('.app_logo');
    }

    get titlePage() {
        return $('//span[@data-test="title"]');
    }

    async validateOnDashboardPage() {
        await this.dashboardTitle.waitForExist({ timeout: 5000 });
        // Validate that user is on dashboard page, representing by title page
        await expect(this.dashboardTitle).toHaveText('Swag Labs'); 
        await expect(this.titlePage).toHaveText('Products');
    }

}

export default new DashboardPage();