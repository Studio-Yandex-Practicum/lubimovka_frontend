import { classes, errorMessages } from '../fixtures/test-constants.json';

describe('form', ()=> {

  beforeEach(()=>{
    cy.visit('/form');
  });

  it('Checks whether the error message appears when the field remaines empty', ()=>{
    cy.get(classes.input.title).type('x'.repeat(1));
    cy.get(classes.input.title).clear();

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.empty);
  });

  it('Checks whether the error message is hidden when the field contains 1 symbol', ()=>{
    cy.get(classes.input.title).type('x'.repeat(1));

    cy.get(classes.error)
      .should('not.exist');
  });

  it('Checks whether the error message is hidden when the field contains 200 symbols', ()=>{
    cy.get(classes.input.title)
      .type('x'.repeat(200));

    cy.get(classes.error).should('not.exist');
  });

  it('Checks whether the error message appears when the field contains more than 200 symbols', ()=>{
    cy.get(classes.input.title)
      .type('x'.repeat(201));

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.maxLengthTwoHundred);
  });

});
