class CartPage{
    placeOrderButton(){
        return cy.get('#page-wrapper > div > div.col-lg-1 > button');
    }

    placeOrderDisplayed(){
        return this.placeOrderButton().should('be.visible');
    }

    placeOrderButtonClick(){
        return this.placeOrderDisplayed().click();
    }
}

module.exports = new CartPage;