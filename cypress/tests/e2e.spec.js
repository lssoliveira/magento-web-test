import MagentoRegisterPage from "../pages/magento-register-page";
import MagentoCheckoutPage from "../pages/magento-checkout-page";
import MagentoProductPage from "../pages/magento-product-page";
import MagentoCartPage from "../pages/magento-cart-page";
import MagentoMainPage from "../pages/magento-main-page";
import { register } from "../support/data/register";
import { product } from "../support/data/product";
import { address } from "../support/data/address";
import { tags } from "../support/tags.enum"

const magentoRegisterPage = new MagentoRegisterPage;
const magentoCheckoutPage = new MagentoCheckoutPage;
const magentoCartPage = new MagentoCartPage;
const magentoProductPage = new MagentoProductPage
const magentoMainPage = new MagentoMainPage();

beforeEach(() => {
  cy.goToMagentoCreateAccount();
})

describe('E2E Magento', { tags: tags.e2e }, () => {
  it('Validate end-to-end flow', () => {
    const fullName = `${register.successRegistration.firstName} ${register.successRegistration.lastName}`;

    magentoRegisterPage.fillRegister(register.successRegistration);
    magentoRegisterPage.createAccountButton();
    magentoMainPage.checkLoggedUser(fullName);
    cy.serchAndAddProductToCart(product.torqueShort)
    magentoProductPage.accessCartByProduct();
    magentoCartPage.procedToCheckout();
    magentoCheckoutPage.fillAddress(address.fullAdrress);
    magentoCheckoutPage.selectShippingMethod();
    magentoCheckoutPage.nextStep();
    magentoCheckoutPage.placeOrder();

    magentoCheckoutPage.checkOrderPlaced('Thank you for your purchase!', 'Your order number is: ', "We'll email you an order confirmation with details and tracking info.");
    magentoCheckoutPage.checkOrderCreated(product.torqueShort.name, product.torqueShort.price);
  });

})
