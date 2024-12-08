import MagentoAccountPage from "../pages/magento-account-page";
import { login } from "../support/data/login";
import { address } from "../support/data/address";
import { tags } from "../support/tags.enum"

const env = Cypress.env('configFile');
const magentoAccountPage = new MagentoAccountPage;
const loginDefault = login[env].loginDefault

beforeEach(() => {
  cy.successLogin(loginDefault.email, loginDefault.pass);
})

describe('Account Magento', { tags: tags.account }, () => {
  it('Validate my account data', () => {
    magentoAccountPage.checkAccountInformation('Lucas Schmidt de Oliveira', 'lucas.schmidt.qa@gmail.com');
  });

  it('Validate address addition', () => {
    const fullAdrress = address.fullAdrress
    
    magentoAccountPage.accessManageAddresses();
    magentoAccountPage.accessAddNewAddress();
    magentoAccountPage.fillFullAddress(fullAdrress);
    magentoAccountPage.saveAddress();

    magentoAccountPage.checkAddressSaved('You saved the address.');
  });

  it('Validate address deletion', () => {
    const fullAdrress = address.fullAdrress

    magentoAccountPage.accessManageAddresses();
    magentoAccountPage.accessAddNewAddress();
    magentoAccountPage.fillFullAddress(fullAdrress);
    magentoAccountPage.saveAddress();
    magentoAccountPage.checkAddressSaved('You saved the address.');
    magentoAccountPage.deleteLastAdditionalAddres();

    magentoAccountPage.checkAddresDeleted('You deleted the address.');
  });

})