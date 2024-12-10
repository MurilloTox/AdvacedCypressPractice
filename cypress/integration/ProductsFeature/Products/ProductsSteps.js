import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";

Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I add to cart 1 product of each category', () => {

  for (let i = 1; i < 4; i++) { // Empieza desde 1 si quieres saltar "CATEGORIES"
    cy.get('.list-group-item').eq(i).should('be.visible').click();

    cy.wait(1000); // Esperar para asegurar que el DOM se estabilice
    cy.get('#tbodyid > div:nth-child(1) a').eq(0).should('be.visible').click();

    cy.wait(1000);
    cy.visit('/');
  }

});