import { classes, errorMessages } from '../fixtures/test-constants.json';

describe('form', ()=> {

  beforeEach(()=>{
    cy.visit('/form');
  });

  it('Checks whether the error message appears when the field contains less than 2 symbols', ()=>{
    cy.get(classes.input.city).type('x'.repeat(1));

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.minLengh);
  });

  it('Checks whether the error message is hidden when the field contains 2 symbols', ()=>{
    cy.get(classes.input.city).type('x'.repeat(2));
    cy.get(classes.error).should('not.exist');
  });

  it('Checks whether the error message is hidden when the field contains 50 symbols', ()=>{
    cy.get(classes.input.city)
      .type('x'.repeat(50));

    cy.get(classes.error).should('not.exist');
  });

  it('Checks whether the error message appears when the field contains more than 50 symbols', ()=>{
    cy.get(classes.input.city)
      .type('x'.repeat(51));

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.maxLengthFifty);
  });

});
