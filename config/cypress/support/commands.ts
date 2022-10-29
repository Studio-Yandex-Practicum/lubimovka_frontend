/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Use `cy.useStub()` to stub server-side HTTP responses.
     *
     * @example
     *    cy.useStub({
     *      url: 'https://localhost:7777/users',
     *      method: 'GET',
     *      response: { id: 1, name: 'Pat' },
     *    });
     */
    useStub(payload: {
      url: string,
      method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
      status?: number
      response: object
    }): Chainable
    /**
     * Use `cy.clearStubs()` to remove any server-side stubs.
     */
    clearStubs(): Chainable
  }
}

beforeEach(() => {
  cy.clearStubs();
});

after(() => {
  cy.clearStubs();
});

Cypress.Commands.add('useStub', (payload) => {
  cy.request('POST', '/__use_stub', payload);
});

Cypress.Commands.add('clearStubs', () => {
  cy.request('/__clear_stubs');
});
