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

    fillInformation(name,country,city,card,mCard,yCard){
        CartPage.name().type(name);
        CartPage.country().type(country);
        CartPage.city().type(city);
        CartPage.card().type(card);
        CartPage.monthCard().type(mCard);
        CartPage.yearCard().type(yCard);
    }
}

module.exports = new GeneralMethods;