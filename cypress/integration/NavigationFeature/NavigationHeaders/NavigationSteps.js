import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import GeneralMethods from "../../../support/GeneralMethods";

Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I click on the contact option', () =>{
    GeneralMethods.clickOnContact();
})

When('I click on the about us option', () =>{
    GeneralMethods.clickOnAboutUs();
})

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