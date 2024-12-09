import MagentoMainPage from "../pages/magento-main-page";
import MagentoProductPage from "../pages/magento-product-page";
import { endPoints } from "./routes/endPoints.enum"
const magentoProductPage = new MagentoProductPage;
const magentoMainPage = new MagentoMainPage;
const env = Cypress.env('hostMagento');

Cypress.Commands.add('goToMagento', () => {
  cy.visit(env);
});

Cypress.Commands.add('goToCart', () => {
  cy.visit(env + 'checkout/cart/');
});

Cypress.Commands.add('goToMagentoLogin', () => {
  cy.visit(env + 'customer/account/login/referer/');
});

Cypress.Commands.add('goToMagentoCreateAccount', () => {
  cy.visit(env + 'customer/account/create/');
});

Cypress.Commands.add('successLogin', (email, password) => {
  cy.goToMagentoLogin();
  cy.get('#email')
    .type(email);
  cy.get('#pass')
    .type(password);
  cy.get('button.login')
    .click();
  cy.captchaHtmlWait();
});

Cypress.Commands.add('serchAndAddProductToCart', (product) => {
  magentoMainPage.searchInStore(product.name);
  magentoMainPage.accessProduct(product.name);
  magentoProductPage.selectroductSize(product.size);
  magentoProductPage.selectProductColor(product.color);
  magentoProductPage.addProductToCart();
});

Cypress.Commands.add('cleanCart', () => {
  cy.get('body').then(($el) => {
    if ($el.find('.action-delete').length) {
      cy.get('.action-delete').first().click();
      cy.cleanCart();
    } else {
      cy.log('Cart is empty!');
    }
  });
});

Cypress.Commands.add('interceptRequest', (method, endPoint, alias) => {
  cy.intercept(method, endPoint).as(alias);
});

Cypress.Commands.add('waitAndCheckRequest', (alias, statusCode) => {
  cy.wait(alias)
    .its('response.statusCode')
    .should('eq', statusCode)
});

Cypress.Commands.add('captchaHtmlWait', () => {
  cy.interceptRequest('GET', endPoints.captchaHtml, 'captchaHtml' )
  cy.waitAndCheckRequest('@captchaHtml', 200)
});
