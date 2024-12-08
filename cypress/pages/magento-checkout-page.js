import { endPoints } from "../support/routes/endPoints.enum"

class MagentoCheckoutPage {

  selectShippingMethod() {
    cy.get("input[value='tablerate_bestway']")
      .should('be.visible')
      .click();
  }

  fillCompany(company) {
    cy.get("input[name='company']")
      .type(company);
  }

  fillStreetAddress(streetAddressLine1, streetAddressLine2, streetAddressLine3) {
    cy.get("input[name='street[0]']")
      .type(streetAddressLine1);
    cy.get("input[name='street[1]']")
      .type(streetAddressLine2);
    cy.get("input[name='street[2]']")
      .type(streetAddressLine3);
  }

  fillCity(city) {
    cy.get("input[name='city']")
      .type(city);
  }

  selectState(state) {
    cy.get("select[name='region_id']")
      .select(state)
  }

  fillZipCode(zipCode) {
    cy.get("input[name='postcode']")
      .type(zipCode);
  }

  selectCountry(country) {
    cy.get("select[name='country_id']")
      .select(country)
  }

  fillPhoneNumber(phoneNumber) {
    cy.get("input[name='telephone']")
      .type(phoneNumber);
  }

  fillAddress(address) {
    this.fillCompany(address.company);
    this.fillStreetAddress(address.streetAddressLine1, address.streetAddressLine2, address.streetAddressLine3);
    this.fillCity(address.city);
    this.selectState(address.state);
    this.fillZipCode(address.zipCode);
    this.selectCountry(address.country);
    this.fillPhoneNumber(address.phoneNumber);
  }

  checkAddress(address) {
    cy.get('.selected-item')
      .should('contain.text', address.firstName)
      .should('contain.text', address.lastName)
      .should('contain.text', address.streetAddress)
      .should('contain.text', address.city)
      .should('contain.text', address.state)
      .should('contain.text', address.zipCode)
      .should('contain.text', address.country)
      .should('contain.text', address.phoneNumber);
  }

  expandOrderSummary() {
    cy.get("div[role='tab']").contains('in Cart')
      .click();
    cy.get('.product-item').contains('View Details')
      .click();
  }

  checkOrderSummary(product) {
    this.expandOrderSummary();
    cy.get('.product-item')
      .should('contain.text', product.name)
      .should('contain.text', product.price)
      .should('contain.text', product.size)
      .should('contain.text', product.color)
  }

  nextStep() {
    cy.interceptRequest('GET', endPoints.cartsMine, 'cartsMine')
    cy.get('button.continue')
      .click();
  }

  placeOrder() {
    cy.waitAndCheckRequest('@cartsMine', 200)
    cy.interceptRequest('POST', endPoints.paymentInformation, 'paymentInformation')
    cy.get("button[title='Place Order']")
      .click();
  }

  checkOrderPlaced(messageThank, messageOrderNumber, messageEmail) {
    cy.get('#maincontent')
      .should('contain.text', messageThank)
      .should('contain.text', messageOrderNumber)
      .should('contain.text', messageEmail);
  }

  accessOrderCreated() {
    cy.get('.order-number')
      .click();
  }

  checkOrderCreated(product, price) {
    this.accessOrderCreated();
    cy.get('#my-orders-table').first()
      .should('contain.text', product)
      .should('contain.text', price)
  }

  checkPaymentInformation(statusCode) {
    cy.waitAndCheckRequest('@paymentInformation', statusCode)
  }

}

export default MagentoCheckoutPage;