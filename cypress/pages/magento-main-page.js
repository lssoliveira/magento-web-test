class MagentoMainPage {

  checkLoggedUser(name) {
    cy.get('.greet.welcome')
      .should('contain.text', `Welcome, ${name}!`);
    cy.get('#ui-id-2')
      .should('be.visible')
  }

  dropDownAccount() {
    cy.get('#ui-id-2')
      .should('be.visible')
    cy.get('.customer-welcome').first()
      .click();
  }

  accessMyAccout() {
    this.dropDownAccount();
    cy.get('li').contains('My Account')
      .click();
  }

  searchInStore(product) {
    cy.get('#search')
      .type(product)
      .type('{enter}');
  }

  checkSearchResult(search) {
    cy.get('.page-title')
      .should('contain.text', `Search results for: '${search}'`)
  }

  checkSearchProduct(product) {
    cy.get('.product-item-info')
      .should('contain.text', product)
  }

  accessProduct(product) {
    cy.get('.product-item-info').contains(product)
      .click();
  }

  accessCart() {
    cy.get('.showcart')
      .click();
    cy.get('.viewcart')
      .click();
  }

}

export default MagentoMainPage;

