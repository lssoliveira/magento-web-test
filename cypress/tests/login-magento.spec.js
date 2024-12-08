import MagentoLoginPage from "../pages/magento-login-page";
import MagentoMainPage from "../pages/magento-main-page";
import { login } from "../support/data/login";
import { tags } from "../support/tags.enum"

const env = Cypress.env('configFile');
const magentoLoginPage = new MagentoLoginPage();
const magentoMainPage = new MagentoMainPage();
const loginDefault = login[env].loginDefault

beforeEach(() => {
  cy.goToMagentoLogin();
  cy.log(loginDefault);
})

describe('Login Magento', { tags: tags.login }, () => {
  it('Validate login successfully', { tags: tags.smoke }, () => {
    magentoLoginPage.fillEmail(loginDefault.email);
    magentoLoginPage.fillPass(loginDefault.pass);
    magentoLoginPage.signInButton();
    
    magentoMainPage.checkLoggedUser('Lucas Schmidt de Oliveira');
  });

  it('Validate unregistered email login', () => {
    const email = login[env].email.notRegistered
    const pass = login[env].pass.valid

    magentoLoginPage.fillEmail(email);
    magentoLoginPage.fillPass(pass);
    magentoLoginPage.signInButton();
    
    magentoLoginPage.checkLoginAlert('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
  });

  it('Validate invalid email login', () => {
    const email = login[env].email.invalid
    const pass = login[env].pass.valid

    magentoLoginPage.fillEmail(email);
    magentoLoginPage.fillPass(pass);
    magentoLoginPage.signInButton();
    
    magentoLoginPage.checkEmailAlert('Please enter a valid email address (Ex: johndoe@domain.com).');
  });

  it('Validate required password field', () => {
    magentoLoginPage.fillEmail(loginDefault.email);
    magentoLoginPage.signInButton();

    magentoLoginPage.checkPassAlert('This is a required field.');
  });

})
