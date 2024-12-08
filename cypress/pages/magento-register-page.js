
class MagentoRegisterPage {

  fillFirstName(firstName) {
    cy.get('#firstname')
      .type(firstName);
  }

  fillLastName(lastName) {
    cy.get('#lastname')
      .type(lastName);
  }

  fillEmail(email) {
    cy.get('#email_address')
      .type(email);
  }

  fillPass(pass) {
    cy.get('#password')
      .type(pass);
  }

  fillPassConfirm(passConfirm) {
    cy.get('#password-confirmation')
      .type(passConfirm);
  }

  fillRegister(register) {
    this.fillFirstName(register.firstName);
    this.fillLastName(register.lastName);
    this.fillEmail(register.email);
    this.fillPass(register.pass);
    this.fillPassConfirm(register.passConfirm || register.pass);
  }

  createAccountButton() {
    cy.get("button[title='Create an Account']")
      .click();
  }

  checkErrorFirstName(message) {
    cy.get('#firstname-error')
      .should('contain.text', message);
  }

  checkErrorLastName(message) {
    cy.get('#lastname-error')
      .should('contain.text', message);
  }

  checkErrorEmail(message) {
    cy.get('#email_address-error')
      .should('contain.text', message);
  }

  checkErrorPass(message) {
    cy.get('#password-error')
      .should('contain.text', message);
  }

  checkErrorPassConfirm(message) {
    cy.get('#password-confirmation-error')
      .should('contain.text', message);
  }

}

export default MagentoRegisterPage;