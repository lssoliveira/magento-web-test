class MagentoCartPage {

  checkProductInCart(product) {
    cy.get('#shopping-cart-table')
      .should('contain.text', product.name)
      .should('contain.text', product.price)
      .should('contain.text', product.size)
      .should('contain.text', product.color);
  }

  checkEmptyCart(message) {
    cy.get('.cart-empty')
      .should('contain.text', message)
  }

  procedToCheckout() {
    cy.get("button[data-role='proceed-to-checkout']")
      .click();
    cy.captchaHtmlWait();
  }

}

export default MagentoCartPage;
