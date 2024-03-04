
const filePath = 'test.png'
const imgPath = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNDNEM0QzQiLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNtYXNrMCkiPgogICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNDNEM0QzQiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjAwNzEiIGN5PSIyMC45Njc2IiByPSIxMS4yOTAzIiBmaWxsPSIjRThFOEU4Ii8+CiAgICA8cGF0aCBkPSJNMjUuMDA1NCAyNS4wMDAyTDY2LjIxMTUgODAuNjQ1NEgtMTYuMjAwNkwyNS4wMDU0IDI1LjAwMDJaIiBmaWxsPSIjRThFOEU4Ii8+CiAgPC9nPgo8L3N2Zz4='

//Navigate to Profile Page
describe('Navigate to the My Profile page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => { return false })

  beforeEach(function (){
    cy.visit('https://shopist.io')
    cy.viewport('macbook-13')
  })

  context('Edit Profile', () => {

    it('Make sure that there is an Edit Profile button', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').click()
  
      //Makes sure that the button is visible
      cy.contains('Edit Profile').should('be.visible')
    })
  
    //Clicks the Edit Profile button and edit the First Name
    it('Able to save the Edited first name and last name', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Clicks an input and enter in to it.
      //cy.get('#firstname').click()
      cy.get('#firstname').clear()
      cy.get('#firstname').type('Rhobert')
  
      //Clicks an input and enter in to it.
      cy.get('#lastname').clear()
      cy.get('#lastname').type('Odoya')
  
      cy.get('#firstname').should('have.value', 'Rhobert')
      cy.get('#lastname').should('have.value', 'Odoya')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('View updated profile').should('be.visible').wait(500).click()
  
      //cy.xpath('//*[@id="profile"]/div/div[1]/div[2]')
      cy.contains('Rhobert Odoya')
    })

    it.only('User must be able to upload the profile image', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').click()
  
      //Makes sure that the button is visible
      cy.contains('Edit Profile').should('be.visible')
  
      //Makes sure that the user is in the My Profile page
      cy.url().should('include', '/profile')
  
       //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //cy.contains('Upload photo').should('be.visible').wait(500).click()
  
      cy.get('#picture').wait(500).attachFile(filePath)
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Remove photo').wait(500)
  
      cy.xpath(`//img[contains(@src, '${imgPath}')]`).should('not.exist')
    })

  })

  context('Negative Testing', () => {
  
    it('User must not be able to proceed when first name field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      //cy.get('#firstname').click()
      cy.get('#firstname').clear()
  
  
      cy.get('#firstname').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a firstname').wait(500).should('be.visible')
    })

    it('User must not be able to proceed when last name field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      //cy.get('#firstname').click()
      cy.get('#lastname').clear()
  
  
      cy.get('#lastname').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a lastname').wait(500).should('be.visible')
    })

    it('User must not be able to proceed when Address field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      cy.get('#address1').clear()
  
  
      cy.get('#address1').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a first address line').wait(500).should('be.visible')
    })

    it('User must be able to proceed even when Address 2 field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      cy.get('#address2').clear()
  
  
      cy.get('#address2').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('View updated profile').wait(500).should('be.visible')
    })

    it('User must not be able to proceed when Address City field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      cy.get('#addressCity').clear()
  
  
      cy.get('#addressCity').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a city').wait(500).should('be.visible')
    })

    it('User must not be able to proceed when Address Zipcode field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      cy.get('#addressZipcode').clear()
  
  
      cy.get('#addressZipcode').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a Zipcode').wait(500).should('be.visible')
    })

    it('User must not be able to proceed when Phone Number field is empty', () => {
      //Clicks the My Profile button
      cy.contains('My Profile').wait(500).click()
  
      //Clicks the Edit Profile button
      cy.contains('Edit Profile').wait(500).click()
  
      cy.url().should('include', '/profile-edit')
  
      //Empty an input 
      cy.get('#phone').clear()
  
  
      cy.get('#phone').should('have.value', '')
  
      cy.contains('Save profile').should('be.visible').wait(500).click()
  
      cy.contains('Please enter a mobile phone number').wait(500).should('be.visible')
    })

  })

  

})

