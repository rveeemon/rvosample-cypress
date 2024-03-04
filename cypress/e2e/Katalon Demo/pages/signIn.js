export class signInPage {
    
    uName_textbox = "//input[@id='txt-username']"
    pWord_textbox = "//input[@id='txt-password']"

    /*
        Enters the username in the textbox
    */
    enterUserName(username){
        cy.xpath(this.uName_textbox).type(username)
    }

    /*
        Enters the password in the textbox
    */
    enterPassword(password){
        cy.xpath(this.pWord_textbox).type(password)
    }

}