
const Page = require('./_page')

class nav extends Page{

    clickChairs(){
        //Clicks the Chairs in Navigation
        cy.contains('Chairs').click()
        cy.get('a').should('have.class', 'a-exact-active chairs')
      }

}