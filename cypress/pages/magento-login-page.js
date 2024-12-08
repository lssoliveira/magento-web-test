
class MagentoLoginPage {

  fillEmail(email) {
    cy.get('#email')
      .type(email);
  }

  fillPass(pass) {
    cy.get('#pass')
      .type(pass);
  }

  signInButton() {
    cy.get('button.login')
      .click();
  }

  checkLoginAlert(message) {
    cy.get('div[role="alert"]')
      .should('contain.text', message);
  }

  checkEmailAlert(message) {
    cy.get('#email-error')
      .should('contain.text', message);
  }

  checkPassAlert(message) {
    cy.get('#pass-error')
      .should('contain.text', message);
  }

}

export default MagentoLoginPage;