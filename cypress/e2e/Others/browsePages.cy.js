describe('Shopist', () => {

  Cypress.on('uncaught:exception', (err, runnable) => { return false })

  //Opens homepage and makes sure that dimension of the screen is from Mac
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('https://shopist.io')
  })
  
  context('Open Site', () => {

    it('Make sure that user is able to open the homepage', () => {
      //Make 
      cy.contains('My Profile')
    })

  })
  
  context('Open each of the navigations', () =>{

    //Opens the Chairs page
    it('Clicks the Chairs navigation', () => {

      //Clicks the Chairs in Navigation
      cy.contains('Chairs').click()
      cy.get('a').should('have.class', 'a-exact-active chairs')

      // Make sure that the item is in that page
      cy.contains('Wicker Chair').should('be.visible')

      //Makes sure that the URL includes sofas
      cy.url().should('include', '/chairs')
    })

    //Opens the Sofa page
    it('Clicks the Sofas navigation', () => {

      //Clicks the Sofa in Navigation
      cy.contains('Sofas').click()
      cy.get('a').should('have.class', 'a-exact-active sofas')

      // Make sure that the item is in that page
      cy.contains('Grey Tufted Couch').should('be.visible')

      //Makes sure that the URL includes sofas
      cy.url().should('include', '/sofas')
    })

    //Opens the Bedding page
    it('Clicks the Bedding navigation', () => {
      //Clicks the bedding navigation
      cy.contains('Bedding').click()
      cy.contains('White Linen Duvet Cover')

      // Make sure that the item is in that page
      cy.contains('White Linen Duvet Cover').should('be.visible')

      //Makes sure that the URL includes bedding
      cy.url().should('include', '/bedding')
    })

    //Opens the Lighting Navigation
    it('Clicks the Lighting navigation', () => {
      //Clicks the Lighting Navigation
      cy.contains('Lighting').click()
      cy.get('a').should('have.class', 'a-exact-active lighting')

      // Make sure that the item is in that page
      cy.contains('Chrome Arc Lamp').should('be.visible')

      //Makes sure that the lighting is in URL
      cy.url().should('include', '/lighting')
    })

    it('Clicks the My Profile navigation', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').click()
      cy.get('a').should('have.class', 'a-exact-active profile')

      //Makes sure that the profile is in URL
      cy.url().should('include', '/profile')
    })

    it('Clicks the Cart navigation', () => {
      //Clicks the Cart button
      cy.contains('Cart').click()
      cy.get('a').should('have.class', 'a-exact-active cart')

      //Makes sure that the cart is in URL
      cy.url().should('include', '/cart')
    })

  }) 

})


