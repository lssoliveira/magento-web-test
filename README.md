# Cypress-E2E-Test

Automation test template using Cypress for Magento e-commerce

## Environment requirements

- [Node.JS](https://nodejs.org)

## Configuration

For local execution you must set your `userDefault` and `passDefault` in the `.cypress.config.js`

## Project Structure
`pages`: Responsible for managing interactions and functions on the screens.

`support`: Responsible for generate data for tests, validate and mock request or status, create useful commands and 
manage test tags.

`tests`: Responsible for setup the execution test, call the created methods and check the results.

## Commands

### Install dependencies

#### Node dependencies:

```sh
npm install
```

### Test execution

For full execution on default environment

```sh
npm run cypress:run:full
```

For open execution on UI mode

```sh
npm run cypress:open
```

> **Obs**
> you can define other tags for execution or even specific browsers, just identify them in the scripts and select them, as in this follow example:
* Tag=checkout: ```npm run cypress:run:checkout```

### How to view the report

#### Local
- After running the test, execute:
```sh
npm run allure:generete
```

```sh
npm run allure:open
```

#### Pipeline
- Download the artifact of GitHub Actions, extract and execute:

```sh
allure open ./<folder_name>
```

## Documentations

- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [Allure-Report](https://allurereport.org/docs/install)
