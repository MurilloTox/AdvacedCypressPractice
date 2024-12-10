class CartPage{
    placeOrderButton(){
        return cy.get('#page-wrapper > div > div.col-lg-1 > button');
    }

    placeOrderDisplayed(){
        return this.placeOrderButton().should('be.visible');
    }
}

module.exports = new CartPage;