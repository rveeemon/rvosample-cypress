
describe('Shopist', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { return false })
  
    //Opens homepage and makes sure that dimension of the screen is from Mac
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.visit('https://shopist.io')

      cy.contains('Chairs').click()
      cy.get('a').should('have.class', 'a-exact-active chairs')
    })
    
    context('In Stock Products', () =>{
  
      //Opens the First Chair page
      it('Clicks the first chair', () => {

        const expectedNumber = 2;
        var num1;
  
        // Make sure that the item is in that page
        cy.contains('Wicker Chair').should('be.visible')
  
        //Makes sure that the URL includes sofas
        cy.url().should('include', '/chairs')

        //Make sure that the Wicker Chair exists
        cy.xpath(`//img[contains(@src, '/_nuxt/img/1.71db95e.jpg')]`).should('be.visible').click()

        //Add to Card button must be visible
        cy.get('.purchase-button').should('be.visible').click()

        cy.contains('(1)').should('be.visible')

        //Make sure that the added chair is in the Cart
        cy.get('.cart').click()
        cy.contains('Wicker Chair').should('be.visible')

      })
  
    })

    context('Sold Out Products', () => {

      //Opens the 1st Sold Out chair
      it('Clicks the Sold Out chair', () => {

        //Makes sure that the URL includes sofas
        cy.url().should('include', '/chairs')
  
        // Make sure that the item is in that page
        cy.contains('Upholstered White Chair').should('be.visible')

        //Make sure that the Wicker Chair exists
        cy.xpath(`//img[contains(@src, '/_nuxt/img/4.ede59fc.jpg')]`).should('be.visible').click()

        //Since the chair is sold out, Sold Out message must appear
        cy.contains('Oops! This item is sold out.').should('be.visible')
        cy.contains('Continue shopping').should('be.visible').click()

        //Make sure that the added chair is in the Cart
        cy.get('.cart').click()
        cy.contains('Upholstered White Chair').should('not.exist')

      })      

    })

    context('Add to Carts', () => {

           //Add multiple chairs in the card
           it('Put multiple chairs in the cart', () => {

            // Make sure that the item is in that page
            cy.contains('White Shell Chair').should('be.visible')
      
            //Makes sure that the URL includes sofas
            cy.url().should('include', '/chairs')
    
            //Make sure that the Wicker Chair exists
            cy.xpath(`//img[contains(@src, '/_nuxt/img/5.f07a2ba.jpg')]`).should('be.visible').click()
    
            //Add to Card button must be visible
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
    
            cy.contains('(4)').should('be.visible')
    
            //Make sure that the added chair is in the Cart
            cy.get('.cart').click()
            cy.contains('White Shell Chair').should('be.visible')
            cy.xpath(`//div[contains(@class,'products')]/div[3]/div/div/div/div[2]/div/div/div[2]`).contains('4')
    
          })
    
          //Add multiple and different chairs
          it('Put multiple chairs in the cart', () => {
    
            // Make sure that the item is in that page
            cy.contains('Plastic White Chair').should('be.visible')
      
            //Makes sure that the URL includes sofas
            cy.url().should('include', '/chairs')
    
            //Make sure that the Wicker Chair exists
            cy.xpath(`//img[contains(@src, '/_nuxt/img/8.5ec24eb.jpg')]`).should('be.visible').click()
    
            //Add to Card button must be visible
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
            cy.get('.purchase-button').should('be.visible').click()
    
            cy.contains('(4)').should('be.visible')

            cy.contains('Chairs').click()
            cy.get('a').should('have.class', 'a-exact-active chairs')

            cy.contains('Tall Wooden Stool').should('be.visible')
      
            //Makes sure that the URL includes sofas
            cy.url().should('include', '/chairs')
    
            //Make sure that the Wicker Chair exists
            cy.xpath(`//img[contains(@src, '/_nuxt/img/7.4244cb5.jpg')]`).should('be.visible').click()
    
            //Add to Card button must be visible
            cy.get('.purchase-button').should('be.visible').click()
    
            //Make sure that the added chair is in the Cart
            cy.get('.cart').click()
            cy.contains('Plastic White Chair').should('be.visible')
            cy.xpath(`//div[contains(@class,'products')]/div[3]/div/div/div/div[2]/div/div/div[2]`).contains('4')
            cy.contains('Tall Wooden Stool').should('be.visible')
            cy.xpath(`//div[contains(@class,'products')]/div[3]/div/div[2]/div/div[2]/div/div/div[2]`).contains('1')

            cy.get('input').type('DISCOUNT!!')
    
          })

    })
      
  
  })
  
  
  