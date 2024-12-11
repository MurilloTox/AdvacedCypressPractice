import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/Pages/HomePage";

Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I click on the right arrow', () => {
    HomePage.clickOnNextSlideButton();
})

When('I click on the left arrow', () => {
    HomePage.clickOnPrevSlideButton();
})

Then('the item displayed should be the second slide', ()=>{
    HomePage.compareElements('div.carousel-item.active img', 'div.carousel-item.active img[src="nexus1.jpg"]');
})

Then('the item displayed should be the first slide', ()=>{
    HomePage.compareElements('div.carousel-item.active img', 'div.carousel-item.active img[src="Samsung1.jpg"]');
})

Then('the item displayed should be the third slide', () =>{
    cy.get('img[alt="Third slide"]').should('be.visible');
})
