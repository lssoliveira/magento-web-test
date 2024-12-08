import { faker } from "@faker-js/faker/locale/en_US"

export const address = {

  fullAdrress: {
    company: 'QA Company Address',
    phoneNumber: faker.phone.number(),
    streetAddressLine1: faker.location.street(),
    streetAddressLine2: faker.location.buildingNumber(),
    streetAddressLine3: faker.location.secondaryAddress(),
    city: faker.location.city(),
    state: 'Florida',
    zipCode: '55441',
    country: 'United States'
  },
  defaulCheckoutAddress: {
    firstName: 'Lucas',
    lastName: 'Schmidt de Oliveira',
    streetAddress: 'Flower Field Ave, Number 2900, Apt. 25',
    city: 'Orlando',
    state: 'Florida',
    zipCode: '32804',
    country: 'United States',
    phoneNumber: '+1555123-6574'
  }
}