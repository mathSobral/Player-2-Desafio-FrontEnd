// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/index.ts
Cypress.Commands.add('getInputByName', (inputName) => {
  return cy.get(`input[name='${inputName}']`)
})

Cypress.Commands.add('getButtonByType', (buttonType) => {
  return cy.get(`button[type='${buttonType}']`)
})

Cypress.Commands.add('locationPathShouldBeEqual', (pathname) => {
  return cy.location('pathname').should('eq', pathname)
})

Cypress.Commands.add('getElementByDataCy', (dataCy) => {
  return cy.get(`[data-cy='${dataCy}']`)
})

function doLogin(){
  cy.visit("/login")
  cy.getInputByName("email").type("teste@gmail.com")
  cy.getInputByName("password").type("123456789")
  cy.getButtonByType("submit").click()
}

Cypress.Commands.add('doLogin', doLogin)


