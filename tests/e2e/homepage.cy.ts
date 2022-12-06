describe('Главная', () => {
  it('загружается', () => {
    cy.fixture('main.json').then((mainData) => {
      cy.addServerSideStub({
        method: 'GET',
        path: '/main/',
        statusCode: 200,
        body: mainData,
      });

      cy.visit('/');

      cy.contains('Открыт прием пьес на фестиваль 2021 года');
    });
  });
});
