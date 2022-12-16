describe('example', () => {
  it('visits base url', () => {
    cy.fixture('stub.json').then((stub) => {
      cy.useStub({
        url: 'http://localhost:3003/api/main/',
        response: stub,
      });
      cy.visit('/');
      cy.contains('Открыт прием пьес на фестиваль 2021 года');
    });
  });
});
