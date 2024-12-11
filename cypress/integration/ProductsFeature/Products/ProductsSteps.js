import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import GeneralMethods from "../../../support/GeneralMethods";
import HomePage from "../../../support/Pages/HomePage";
import CartPage from "../../../support/Pages/CartPage";

Given("I'm in the homepage", () => {
    cy.visit("/");
})

When('I add to cart 1 product of each category', () => {
  GeneralMethods.addOneProductForEachCategory();
});

When('i delete 1 product from the cart', () => {
  HomePage.clickOnCart();
  CartPage.deleteProduct();
})

When('i proceed with the purchase', () => {
  CartPage.placeOrderButtonClick();
})

When('i fill my personal information', () => {
  GeneralMethods.fillInformation();
  CartPage.clickPurchaseButton();
})

Then('i should see a confirmation message', () => {
  CartPage.verifyPurchase();
})