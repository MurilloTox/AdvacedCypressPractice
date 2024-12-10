import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/Pages/HomePage";

Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I click on the right arrow {int} time(s)', times => {
    for (let i = 0; i < times; i++) {
        HomePage.clickOnNextSlideButton();
        if (i!=(times-1)){
            cy.wait(1000);
        }
      }
})

When('I click on the left arrow {int} time(s)', times => {
    for (let i = 0; i < times; i++) {
        HomePage.clickOnPrevSlideButton();
        if (i!=(times-1)){
            cy.wait(1000);
        }
      }
})

Then('the item displayed should be the second slide', ()=>{
    HomePage.compareElements('div.carousel-item.active img', 'div.carousel-item.active img[src="nexus1.jpg"]');
})

Then('the item displayed should be the first slide', ()=>{
    HomePage.compareElements('div.carousel-item.active img', 'div.carousel-item.active img[src="Samsung1.jpg"]');
})
