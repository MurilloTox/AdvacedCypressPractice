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
}

module.exports = new GeneralMethods;