import { faker } from "@faker-js/faker/locale/en_US"

export const register = {

  successRegistration: {
    firstName: 'Lucas',
    lastName: faker.person.lastName(),
    email: faker.internet.exampleEmail({ firstName: 'Lucas' }),
    pass: faker.internet.password({ length: 20 })
  },

  incorrectRegistration: {
    firstName: 'Lucas',
    lastName: 'Incorrect Test',
    email: 'noEmail',
    pass: 'weakPass',
    passConfirm: 'wrongPass'
  }

}