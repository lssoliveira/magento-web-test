import MagentoCheckoutPage from "../pages/magento-checkout-page";
import MagentoCartPage from "../pages/magento-cart-page";
import MagentoProductPage from "../pages/magento-product-page";
import { login } from "../support/data/login";
import { product } from "../support/data/product";
import { address } from "../support/data/address";
import { tags } from "../support/tags.enum"

const env = Cypress.env('configFile');
const magentoCheckoutPage = new MagentoCheckoutPage;
const magentoCartPage = new MagentoCartPage;
const magentoProductPage = new MagentoProductPage;
const loginDefault = login[env].loginDefault

beforeEach(() => {
  cy.successLogin(loginDefault.email, loginDefault.pass);
  cy.goToCart();
  cy.cleanCart();
  cy.serchAndAddProductToCart(product.torqueShort);
  magentoProductPage.accessCartByProduct();
})

describe('Checkout Magento', { tags: tags.checkout }, () => {
  it('Validate shipping address and product at checkout', { tags: tags.smoke }, () => {
    magentoCartPage.procedToCheckout();

    magentoCheckoutPage.checkOrderSummary(product.torqueShort);
    magentoCheckoutPage.checkAddress(address.defaulCheckoutAddress);
  });

  it('Validate order creation', { tags: tags.smoke }, () => {
    magentoCartPage.procedToCheckout();
    magentoCheckoutPage.selectShippingMethod();
    magentoCheckoutPage.nextStep();
    magentoCheckoutPage.placeOrder();

    magentoCheckoutPage.checkPaymentInformation(200);
    magentoCheckoutPage.checkOrderPlaced('Thank you for your purchase!', 'Your order number is: ', "We'll email you an order confirmation with details and tracking info.");
    magentoCheckoutPage.checkOrderCreated(product.torqueShort.name, product.torqueShort.price);
  });

})
