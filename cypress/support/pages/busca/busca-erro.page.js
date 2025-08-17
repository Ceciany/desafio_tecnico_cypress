import { INPUT_SEARCH, TABLE } from "../cadastro/cadastro-sucesso.page"

const ERROR_USER_NOT_FOUND = 'No rows found'

Cypress.Commands.add('focusSearch', () =>{
    cy.get(INPUT_SEARCH).focus()
})

Cypress.Commands.add('inputUserNonExistent', () =>{
    cy.get(INPUT_SEARCH).type(Cypress.env('userNonExistent'), {log: false})
})

Cypress.Commands.add('userNotFound', () =>{
    cy.get(TABLE).should('contain', ERROR_USER_NOT_FOUND)
})