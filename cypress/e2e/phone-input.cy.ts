import { classes, errorMessages } from '../fixtures/test-constants.json';

const mockPhones = {
  correct: '9999999999',
  eigthDigits: '99999999',
};

describe('form', ()=> {

  beforeEach(()=>{
    cy.visit('/form');
  });

  it('Checks whether the error message appears when the field remaines empty', ()=>{
    cy.get(classes.input.phone).type(mockPhones.correct);
    cy.get(classes.input.phone).clear();

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.empty);
  });

  it('Checks whether the error message appears when the field contains insufficient number of digits', ()=>{
    cy.get(classes.input.phone).type(mockPhones.eigthDigits);

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.incorrectPhone);
  });

});
