describe('HerokuApp', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })

    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://the-internet.herokuapp.com/')
    })

    context('Add/Remove Elements', () => {

        it('Add Button Element', () => {
            cy.contains("Add/Remove Elements").wait(500).click()
            cy.url().should('include','add_remove_elements/')
    
            cy.contains("Add Element").wait(500).click()
            cy.contains("Delete").wait(500).should("be.visible")
        })

        it('Remove Element', () => {
            cy.contains("Add/Remove Elements").wait(500).click()
            cy.url().should('include','add_remove_elements/')
    
            cy.contains("Add Element").wait(500).click()
            cy.get(".added-manually").wait(500).should("be.visible").click()

            cy.get(".added-manually").should("not.exist")
        })

    })
    
    context('Checkboxes', () => {

        it("All checkbox was ticked", () => {
            cy.contains("Checkboxes").wait(500).click()
            cy.url().should('include','checkboxes')

            cy.get("[type = 'checkbox']").check()
            cy.get("[type = 'checkbox']").should("be.checked")
        })

        it("Uncheck all checkboxes", () => {
            cy.contains("Checkboxes").wait(500).click()
            cy.url().should('include','checkboxes')

            cy.get("[type = 'checkbox']").uncheck()
            cy.get("[type = 'checkbox']").should("not.be.checked")
        })
        
        it.only("Uncheck all ticked checkboxes and check all unticked", () => {
            cy.contains("Checkboxes").wait(500).click()
            cy.url().should('include','checkboxes')

            cy.get("[type = 'checkbox']:checked").uncheck()
            cy.get("[type = 'checkbox']").should("not.be.checked")
        })

    })

})