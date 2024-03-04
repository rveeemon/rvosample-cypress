describe('Open Site', 
{
  viewportHeight: 1600,
  viewportWidth: 2560,
}, () => {

  beforeEach(function (){
    cy.visit('https://shopist.io/')
  })

  it('Check the URL', () => {
    cy.contains('Your Guestroom Furniture on a Budget')
    //cy.once('uncaught:exception')
  }) 

})