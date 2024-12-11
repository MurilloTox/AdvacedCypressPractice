class CartPage{
    placeOrderButton(){
        return cy.get('#page-wrapper > div > div.col-lg-1 > button');
    }

    deleteButton(){
        return cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(4) > a')
        .should('be.visible');
    }

    name(){
        return cy.get('#name');
    }

    country(){
        return cy.get("#country");
    }

    city(){
        return cy.get('#city');
    }

    card(){
        return cy.get('#card');
    }

    monthCard(){
        return cy.get('#month');
    }

    yearCard(){
        return cy.get('#year');
    }

    purchaseButton(){
        return cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary')
        .should('be.visible');
    }

    successLabel(){
        return cy.get('h2:contains("Thank you for your purchase!")');
    }

    verifyPurchase(){
        return this.successLabel().should('exist');
    }

    placeOrderDisplayed(){
        return this.placeOrderButton().should('be.visible');
    }

    placeOrderButtonClick(){
        return this.placeOrderButton().should('be.visible').click();
    }
    
    deleteProduct(){
        return this.deleteButton().click();
    }

    clickPurchaseButton(){
        return this.purchaseButton().click();
    }

    checkPurchase(){
        return this.verifyPurchase();
    }
}

module.exports = new CartPage;