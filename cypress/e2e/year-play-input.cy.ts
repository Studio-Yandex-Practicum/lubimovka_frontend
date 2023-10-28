import { classes, errorMessages } from '../fixtures/test-constants.json';

const MOCK_CURRENT_YEAR = new Date().getFullYear();
const maxYearMessage = `Убедитесь, что это значение меньше либо равно ${MOCK_CURRENT_YEAR}`;

describe('form', ()=> {

  beforeEach(()=>{
    cy.visit('/form');
  });

  it('Checks whether the error message appears when the field contains 1899', ()=>{
    cy.get(classes.input.yearPlay).type('1899');

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.minYear);
  });

  it('Checks whether the error message is hidden when the field contains current year', ()=>{
    cy.get(classes.input.yearPlay).type(`${MOCK_CURRENT_YEAR}`);

    cy.get(classes.error).should('not.exist');
  });

  it('Checks whether the error message appears when the field contains post-current year', ()=>{
    cy.get(classes.input.yearPlay).type(`${MOCK_CURRENT_YEAR + 1}`);

    cy.get(classes.error)
      .should('exist')
      .contains(maxYearMessage);
  });

});
