import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'


import page from '../pageobjects/page.js';
import LoginPage from '../pageobjects/login.page.js';
import dashboardPage from '../pageobjects/dashboard.page.js';
import homeviewproductPage from '../pageobjects/homeviewproduct.page.js';
import cartValidationPage from '../pageobjects/cartvalidation.page.js';


// Test case 1
Given('User is on the login page', async () => {
    LoginPage.open();
})

Then('User input {string} as username and {string} as password', async (username, password) => {
    LoginPage.inputUsername(username);
    await browser.pause(3000);
    LoginPage.inputPassword(password);
    await browser.pause(3000);
});

When('User click on the login button', () => {
    LoginPage.clickLoginButton();
});

Then('I should be on the dashboard page', async () => {
    LoginPage.validateLogin();
    await browser.pause(3000);
});


//Test Case 2
Given('User is on the dashboard page', () => {
  // Write code here that turns the phrase above into concrete actions
  dashboardPage.open();
});

Then('User is validate on dashboard page', async () => {
  // Write code here that turns the phrase above into concrete actions
  dashboardPage.validateOnDashboardPage();
  await browser.pause(3000);
});


// Test Case 3
Given('User is on the home view product page', () => {
    // Write code here that turns the phrase above into concrete actions
    homeviewproductPage.open();
});

Then('User click an item on home view product page', async () => {
    // Write code here that turns the phrase above into concrete actions
    homeviewproductPage.clickitemName();
    await browser.pause(3000);
});

Then('User validate item on view detail product', async () => {
    // Write code here that turns the phrase above into concrete actions
    homeviewproductPage.validateChooseItem();
    await browser.pause(3000);
});

Then('User add item by click button add', async () => {
  // Write code here that turns the phrase above into concrete actions
  homeviewproductPage.addToCartButtonClick();
  await browser.pause(3000);
});


