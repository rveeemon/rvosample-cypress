import {signInPage} from "./pages/signIn"

const signinPage = new signInPage()

describe('Cura Homepage', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { return false })

    var uName
    var pWord

    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })
        
    context('Log in Tests', () => {

        it('Open Sign InPage',() => {
            //cy.url().should('eq', 'https://katalon-demo-cura.herokuapp.com/')
    
            cy.get('#menu-toggle > .fa').click()
    
            cy.contains('Login').should('be.visible').click()
    
            cy.url().should('include','/profile.php#login')
            
        })
    
        it('User must be able to log in using the correct username and password', () => {
            cy.url().should('eq', 'https://katalon-demo-cura.herokuapp.com/')
    
            cy.get('#menu-toggle > .fa').click()
    
            cy.contains('Login').should('be.visible').click()
    
            cy.url().should('include','/profile.php#login')
    
            uName = "John Doe"
            pWord = "ThisIsNotAPassword"
    
            signinPage.enterUserName(uName)
            signinPage.enterPassword(pWord)
    
            cy.get('#btn-login').click()
    
            cy.get('#menu-toggle > .fa').wait(500).click()
    
            cy.contains('Logout').wait(500).should('be.visible')
        })
    
        it('User must not be able to log in with wrong username and password', () => {
            
            cy.url().should('eq', 'https://katalon-demo-cura.herokuapp.com/')
    
            cy.get('#menu-toggle > .fa').click()
    
            cy.contains('Login').should('be.visible').click()
    
            cy.url().should('include','/profile.php#login')
    
            uName = "Jose Cruz"
            pWord = "This is the password"
    
            signinPage.enterUserName(uName)
            signinPage.enterPassword(pWord)
    
            cy.get('#btn-login').click()
    
            cy.xpath("//p[contains(.,'Login failed! Please ensure the username and password are valid.')]")
            .wait(500)  
            .should('be.visible')
        })
    
    })

})