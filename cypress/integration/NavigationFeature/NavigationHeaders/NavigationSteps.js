import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import GeneralMethods from "../../../support/GeneralMethods";
import HomePage from "../../../support/Pages/HomePage";
import CartPage from "../../../support/Pages/CartPage";


Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I click on the contact option', () =>{
    GeneralMethods.clickOnContact();
})

When('I click on the about us option', () =>{
    GeneralMethods.clickOnAboutUs();
})

When('I click on the cart option', () => {
    HomePage.clickOnCart();
  });
  
Then('the place order button should be displayed', () => {
    CartPage.placeOrderDisplayed();
});

Then('a form should be displayed', () =>{
    GeneralMethods.contactIsDisplayed();
})

Then('a video should be visible', () =>{
    GeneralMethods.aboutUsIsDisplayed();
})

After({ tags: '@justAFrame' }, () => {
    cy.wait(500);
    cy.get('div.modal-dialog:visible .modal-header .close > span').click();
});