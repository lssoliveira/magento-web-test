import MagentoMainPage from "../pages/magento-main-page";
import MagentoProductPage from "../pages/magento-product-page";
import { login } from "../support/data/login";
import { product } from "../support/data/product";
import { tags } from "../support/tags.enum";

const env = Cypress.env('configFile');
const magentoMainPage = new MagentoMainPage;
const magentoProductPage = new MagentoProductPage;
const loginDefault = login[env].loginDefault;

beforeEach(() => {
  cy.successLogin(loginDefault.email, loginDefault.pass);
  magentoMainPage.searchInStore(product.orionJacket.name);
})

describe('Browse Magento', { tags: tags.browse }, () => {
  it('Validate product search', { tags: tags.smoke }, () => {
    magentoMainPage.checkSearchResult(product.orionJacket.name);
    magentoMainPage.checkSearchProduct(product.orionJacket.name);
  });

  it('Validate product information', () => {
    magentoMainPage.accessProduct(product.orionJacket.name);
    magentoProductPage.checkProductName(product.orionJacket.name);
    magentoProductPage.checkProductPrice(product.orionJacket.price);
  });

});
