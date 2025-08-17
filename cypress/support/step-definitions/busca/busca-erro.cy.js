import {  When,  And,  Then} from "cypress-cucumber-preprocessor/steps"

When('clico na barra de busca', () =>{
    cy.focusSearch()
})

And('digito um nome de usuário que não existe', () =>{
    cy.inputUserNonExistent()
})

Then('a tabela exibe a mensagem {string}', () =>{
    cy.userNotFound()
})