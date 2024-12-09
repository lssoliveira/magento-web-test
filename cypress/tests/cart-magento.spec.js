import MagentoProductPage from "../pages/magento-product-page";
import MagentoCartPage from "../pages/magento-cart-page";
import { login } from "../support/data/login";
import { product } from "../support/data/product";
import { tags } from "../support/tags.enum";

const env = Cypress.env('configFile');
const magentoProductPage = new MagentoProductPage;
const magentoCartPage = new MagentoCartPage;
const loginDefault = login[env].loginDefault;

beforeEach(() => {
  cy.successLogin(loginDefault.email, loginDefault.pass);
  cy.serchAndAddProductToCart(product.torqueShort);
});

describe('Cart Magento', { tags: tags.cart }, () => {
  it('Validate product addition to cart', { tags: tags.smoke }, () => {
    magentoProductPage.checkAddedProductAlert(product.torqueShort.name);
    magentoProductPage.accessCartByProduct();
    magentoCartPage.checkProductInCart(product.torqueShort);
  });

  it('Validate empty cart', { skipAfterEach: true }, () => {
    magentoProductPage.accessCartByProduct();
    cy.cleanCart();
    magentoCartPage.checkEmptyCart('You have no items in your shopping cart');
  });

});
