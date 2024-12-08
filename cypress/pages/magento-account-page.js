class MagentoAccountPage {

  checkMyAccountPage(message) {
    cy.get('.page-title')
      .should('contain.text', message)
      .should('be.visible');
  }

  checkAllert(message) {
    cy.get("div[role='alert']")
      .should('contain.text', message);
  }

  checkRegister(message) {
    this.checkAllert(message);
  }

  checkAccountInformation(name, email) {
    cy.get('.box-information')
      .should('contain.text', name)
      .should('contain.text', email);
  }

  accessManageAddresses() {
    cy.get('a').contains('Manage Addresses')
      .click();
  }

  accessAddNewAddress() {
    cy.captchaHtmlWait()
    cy.get("button[title='Add New Address']")
      .click();
  }

  fillCompany(company) {
    cy.get('#company')
      .type(company);
  }

  fillPhoneNumber(phoneNumber) {
    cy.get('#telephone')
      .type(phoneNumber);
  }

  fillStreetAddress(streetAddressLine1, streetAddressLine2, streetAddressLine3) {
    cy.get('#street_1')
      .type(streetAddressLine1);
    cy.get('#street_2')
      .type(streetAddressLine2);
    cy.get('#street_3')
      .type(streetAddressLine3);
  }

  fillCity(city) {
    cy.get('#city')
      .type(city);
  }

  selectState(state) {
    cy.get('#region_id')
      .select(state)
  }

  fillZipCode(zipCode) {
    cy.get('#zip')
      .type(zipCode);
  }

  selectCountry(country) {
    cy.get('#country')
      .select(country)
  }

  fillFullAddress(adrress) {
    this.fillCompany(adrress.company);
    this.fillPhoneNumber(adrress.phoneNumber);
    this.fillStreetAddress(adrress.streetAddressLine1, adrress.streetAddressLine2, adrress.streetAddressLine3);
    this.fillCity(adrress.city);
    this.selectState(adrress.state);
    this.fillZipCode(adrress.zipCode);
    this.selectCountry(adrress.country);
  }

  saveAddress() {
    cy.get('button.save')
      .click();
  }

  checkAddressSaved(message) {
    this.checkAllert(message);
  }

  deleteLastAdditionalAddres() {
    cy.get("a[role='delete-address']").first()
      .click();
    cy.get('button.action-accept').contains('OK')
      .click();
  }

  checkAddresDeleted(message) {
    this.checkAllert(message);
  }

}

export default MagentoAccountPage;