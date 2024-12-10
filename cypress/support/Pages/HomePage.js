class HomePage {
    HomePageElements = {
        categoryPhones: ()=>{
            return cy.get('.list-group-item').contains('Phones');
        },
        categoryLaptops: ()=>{
            return cy.get('.list-group-item').contains('Laptops');
        },
        categoryMonitors: ()=>{
            return cy.get('.list-group-item').contains('Monitors');
        }
    }


    prevSlideButton(){
        return cy.get('.carousel-control-prev-icon');
    }

    nextSlideButton() {
        return cy.get('.carousel-control-next-icon');
    }
      
    clickOnNextSlideButton() {
        return this.nextSlideButton().click();
    }
    
    clickOnPrevSlideButton() {
        return this.prevSlideButton().click();
    }


    compareElements(selector1, selector2) {
        cy.wait(1000);
        cy.get(selector1).then(($el1) => {
          cy.get(selector2).then(($el2) => {
            expect($el1[0]).to.equal($el2[0]);
          });
        });
    }

}

module.exports = new HomePage;