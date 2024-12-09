import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given('I visit the homepage', () => {
    cy.visit("/");
})

When('I click on the arrow', () => {
    cy.get('.carousel-control-next').click();
})

Then('the item displayed should be different', () =>{
    cy.get('img[alt="Second slide"]').should('be.visible');
})