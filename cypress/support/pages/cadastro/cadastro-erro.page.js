import { INPUT_EMAIL, INPUT_FIRST_NAME } from "./cadastro-sucesso.page"

const POP_UP_FORM = '.modal-content'


Cypress.Commands.add('addEmailInvalido', () =>{
    cy.formCompleted()
    cy.get(INPUT_EMAIL).clear()
    cy.get(INPUT_EMAIL).type(Cypress.env('userEmailIvalido'), {log: false})
})

Cypress.Commands.add('validateErroSubmit', () =>{
    cy.get(POP_UP_FORM).should('be.visible')
})

Cypress.Commands.add('cleanFirstName', () =>{
    cy.formCompleted()
    cy.get(INPUT_FIRST_NAME).clear()
})


