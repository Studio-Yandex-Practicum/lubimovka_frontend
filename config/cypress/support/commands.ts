/// <reference types="./commands"/>

beforeEach(() => {
  cy.clearServerSideStubs();
});

after(() => {
  cy.clearServerSideStubs();
});

Cypress.Commands.add('addServerSideStub', (payload) => {
  cy.request('POST', '/__cypress_add_server_side_stub', payload);
});

Cypress.Commands.add('clearServerSideStubs', () => {
  cy.request('/__cypress_clear_server_side_stubs');
});
