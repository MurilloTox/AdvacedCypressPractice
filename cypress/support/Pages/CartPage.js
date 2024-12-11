class CartPage{
    placeOrderButton(){
        return cy.get('#page-wrapper > div > div.col-lg-1 > button');
    }

    deleteButton(){
        return cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(4) > a')
        .should('be.visible');
    }

    name(){
        cy.get('#orderModal').should('be.visible');
        return cy.get('#name').should('be.visible');
    }

    country(){
        cy.get('#orderModal').should('be.visible');
        return cy.get("#country").should('be.visible');
    }

    city(){
        cy.get('#orderModal').should('be.visible');

        return cy.get('#city').should('be.visible');
    }

    card(){
        cy.get('#orderModal').should('be.visible');

        return cy.get('#card').should('be.visible');
    }

    monthCard(){
        cy.get('#orderModal').should('be.visible');

        return cy.get('#month').should('be.visible');
    }

    yearCard(){
        cy.get('#orderModal').should('be.visible');

        return cy.get('#year').should('be.visible');
    }

    purchaseButton(){
        cy.get('#orderModal').should('be.visible');

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
        return this.placeOrderButton().should('exist').and('be.visible');
    }

    placeOrderButtonClick(){
        return this.placeOrderDisplayed().click();
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