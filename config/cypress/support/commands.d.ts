/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
     addServerSideStub(payload: any): Chainable
     clearServerSideStubs(): Chainable
  }
}
