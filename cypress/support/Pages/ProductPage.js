class ProductPage{
    addToCartButton(){
        return cy.get('#tbodyid > div.row > div > a').should('be.visible');
    }

    addToCart(){
        return this.addToCartButton().click();
    }
}

module.exports = new ProductPage;