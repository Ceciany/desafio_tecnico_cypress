import {  Given,  When,  And,  Then} from "cypress-cucumber-preprocessor/steps"

Given('que acesso o formulário de cadastro da página Web Tables', () =>{
    cy.visit('/')
    cy.addNewRecord()
})

When('preencho o campo Email com um formato inválido',() =>{
    cy.addEmailInvalido()
})

Then('o formulário não é submetido e o usuário permanece na mesma tela', () =>{
    cy.validateErroSubmit()
})

And('deixo o campo First Name em branco', () =>{
    cy.cleanFirstName()
})

When('clico em Submit com o formulário vazio',() =>{
    cy.clickSubmit()
})