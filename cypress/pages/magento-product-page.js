import { endPoints } from "../support/routes/endPoints.enum"

class MagentoProductPage {

  productInfo(product) {
    cy.get('.product-info-main')
      .should('contain.text', product)
  }

  checkProductName(name) {
    this.productInfo(name)
  }

  checkProductPrice(price) {
    this.productInfo(price)
  }

  selectroductSize(size) {
    cy.get('#product-options-wrapper').contains(size)
      .click();
  }

  selectProductColor(color) {
    cy.get(`div[aria-label='${color}']`)
      .click();
  }

  addProductToCart() {
    cy.get('#product-addtocart-button')
      .click();
  }

  checkAddedProductAlert(product) {
    cy.get('div[role="alert"]')
      .should('contain.text', `You added ${product} to your shopping cart`);
  }

  accessCartByProduct() {
    cy.get('div[role="alert"]').contains('shopping cart')
      .click();

    cy.interceptRequest('GET', endPoints.shippingMethod, 'shippingMethod')
    cy.wait('@shippingMethod')
      .its('response.statusCode')
      .should('eq', 200)
  }

}

export default MagentoProductPage;

