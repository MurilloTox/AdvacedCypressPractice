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
            CartPage.name().type(userData.name);
            CartPage.country().type(userData.country);
            CartPage.city().type(userData.city);
            CartPage.card().type(userData.card);
            CartPage.monthCard().type(userData.month);
            CartPage.yearCard().type(userData.year);
        });
    }
}

module.exports = new GeneralMethods;