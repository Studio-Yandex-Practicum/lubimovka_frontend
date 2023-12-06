import { classes, errorMessages } from '../fixtures/test-constants.json';

const mockEmails = {
  correct: 'email@mail.com',
  noDog: 'email.mail',
  noDot: 'email@mail'
};

describe('form', ()=> {

  beforeEach(()=>{
    cy.visit('/form');
  });

  it('Checks whether the error message appears when the field remaines empty', ()=>{
    cy.get(classes.input.email).type(mockEmails.correct);
    cy.get(classes.input.email).clear();

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.empty);
  });

  it('Checks whether the error message appears when email has no @', ()=>{
    cy.get(classes.input.email).type(mockEmails.noDog);

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.incorrectEmail);
  });

  it('Checks whether the error message appears when email has no .', ()=>{
    cy.get(classes.input.email).type(mockEmails.noDot);

    cy.get(classes.error)
      .should('exist')
      .contains(errorMessages.incorrectEmail);
  });

});
