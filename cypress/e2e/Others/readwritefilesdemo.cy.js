/// <reference types = "cypress"/>


describe('Read, and write filed', () => {

    it('Read files using fixture', () => {

        cy.fixture('example').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
        })
    })

    it('Read files using read', () => {

        cy.readFile('./cypress/fixtures/example.json').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
        })
    })

    it('Write files using write', () => {

        cy.writeFile('.cypress//fixtures/sample.txt', 'Hello World!\n')
        cy.writeFile('./cypress/fixtures/sample.txt', 'Hello I Am Rhobert', {flag: 'a+'})
    })

})