// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

import "./commands"

declare global {
  namespace Cypress {
    interface Chainable {
     
      /**
       * Returns a input element by its name
       * @param inputName 
       */
      getInputByName(inputName: string): Chainable
      
      /**
       * Returns a button element by its type
       * @param buttonType 
       */
      getButtonByType(buttonType: string): Chainable

      /**
       * Returns a element by its data-cy attribute
       * @param dataCy 
       */
      getElementByDataCy(dataCy: string): Chainable

      /**
       * Asserts that the location path is equals to then Cypress detects uncaught errors originating from your test code it will automatically fail the current test.he given path
       * @param path 
       */
      locationPathShouldBeEqual(path: string): Chainable<string>

      /**
       * Do login 
       */
      doLogin(): Chainable
     }
  }
}