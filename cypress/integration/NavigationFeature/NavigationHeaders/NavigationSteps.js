import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import GeneralMethods from "../../../support/GeneralMethods";
import HomePage from "../../../support/Pages/HomePage";
import CartPage from "../../../support/Pages/CartPage";


Given("I'm in the homepage", () => {
    cy.visit("/");
})

Given('i made a GET request to {string}', (url) => {
    cy.request('GET', url).as('response');
});

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

Then('i should obtain a status code of {int}', (statusCode) => {
    cy.get('@response').should('have.property', 'status', statusCode);
});