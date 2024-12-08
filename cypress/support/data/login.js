export const login = {

  PRD: {
    loginDefault: {
      email: Cypress.env('userDefault'),
      pass: Cypress.env('passDefault')
    },
    email: {
      notRegistered: 'lucas.not.registered@testing.com',
      invalid: 'lucas.invalid.mail'
    },
    pass: {
      valid: 'QAtesting-9999',
      incorrect: 'passIncorrect10'
    }
  },

  DEV: {}

}