import MagentoRegisterPage from "../pages/magento-register-page";
import MagentoAccountPage from "../pages/magento-account-page";
import MagentoMainPage from "../pages/magento-main-page";
import { register } from "../support/data/register";
import { tags } from "../support/tags.enum";

const magentoRegisterPage = new MagentoRegisterPage;
const magentoAccountPage = new MagentoAccountPage;
const magentoMainPage = new MagentoMainPage();

beforeEach(() => {
  cy.goToMagentoCreateAccount();
})

describe('Create Account Magento', { tags: tags.register }, () => {
  it('Validate successful account creation', { tags: tags.smoke }, () => {
    const fullName = `${register.successRegistration.firstName} ${register.successRegistration.lastName}`;

    magentoRegisterPage.fillRegister(register.successRegistration);
    magentoRegisterPage.createAccountButton();

    magentoMainPage.checkLoggedUser(fullName);
    magentoAccountPage.checkMyAccountPage('My Account');
    magentoAccountPage.checkRegister('Thank you for registering with Main Website Store.');
  });

  it('Validate required account creation fields', () => {
    magentoRegisterPage.createAccountButton();

    const message = 'This is a required field.';
    magentoRegisterPage.checkErrorFirstName(message);
    magentoRegisterPage.checkErrorLastName(message);
    magentoRegisterPage.checkErrorEmail(message);
    magentoRegisterPage.checkErrorPass(message);
    magentoRegisterPage.checkErrorPassConfirm(message);
  });

  it('Validate incorrect fields', () => {

    magentoRegisterPage.fillRegister(register.incorrectRegistration);
    magentoRegisterPage.createAccountButton();

    magentoRegisterPage.checkErrorEmail('Please enter a valid email address (Ex: johndoe@domain.com).');
    magentoRegisterPage.checkErrorPass('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
    magentoRegisterPage.checkErrorPassConfirm('Please enter the same value again.');
  });

});

