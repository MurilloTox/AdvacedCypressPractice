const CartPage = require("./Pages/CartPage");
const ProductPage = require("./Pages/ProductPage");

class GeneralMethods{

    clickOnContact(){
        return cy.get('#navbarExample > ul > li:nth-child(2) > a').click();
    }

    clickOnAboutUs(){
        return cy.get("#navbarExample > ul > li:nth-child(3) > a").click();
    }

    contactIsDisplayed(){
        return cy.get('#recipient-email').should('be.visible');
    }

    aboutUsIsDisplayed(){
        return cy.get('#example-video').should('be.visible');
    }

    validateUrl(expectedUrl){
        cy.url().should('include', expectedUrl);
    }

    addOneProductForEachCategory(){
        for (let i = 1; i < 4; i++) { 
            cy.get('.list-group-item').eq(i).should('be.visible').click();
        
            cy.get('#tbodyid > div:nth-child(1) a').eq(0).should('be.visible').click();
        
            ProductPage.addToCart();

            cy.visit('/');
          }
    }

    fillInformation(){
        return cy.fixture('UserData.json').then((userData) => {
            CartPage.name().should('be.visible').type(userData.name);
            CartPage.country().should('be.visible').type(userData.country);
            CartPage.city().should('be.visible').type(userData.city);
            CartPage.card().should('be.visible').type(userData.card);
            CartPage.monthCard().should('be.visible').type(userData.month);
            CartPage.yearCard().should('be.visible').type(userData.year);
        });
    }
}

module.exports = new GeneralMethods;