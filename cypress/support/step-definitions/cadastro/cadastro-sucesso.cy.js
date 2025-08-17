import {  Given,  When,  And,  Then} from "cypress-cucumber-preprocessor/steps"

Given('que acesso a página Web Tables', () =>{
    cy.visit('/')
})

When('acesso o formulário de cadastro',() =>{
    cy.addNewRecord()
})

And('preencho todos os campos obrigatórios com dados válidos',() =>{
    cy.formCompleted()
})

And('clico em Submit',() =>{
    cy.clickSubmit()
})

And('faço a validação do cadastro do usuário',() =>{
    cy.confirmRegistration()
})

And('edito o cadastro desse usuário',() =>{
    cy.editUser()
    cy.clickSubmit()
})

And('valido a alteração',() =>{
    cy.confirmEdit()
})

And('excluo o cadastro desse usuário',() =>{
    cy.deleteUser()
})

Then('o usuário cadastrado não está mais presente na tabela', () =>{
    cy.confirmDelete()
})

And ('fecho o formulário sem submeter', () =>{
    cy.closeForm()
})

And ('acesso o formulário de cadastro em seguida', () =>{
    cy.addNewRecord()
})

Then('os campos estão preenchidos com os dados anteriores', () =>{
    cy.confirmForm()
})

When('preencho e submeto o formulário de cadastro para três novos usuários', () => {
  cy.addMultipleRandomUsers(3)
})

And('os novos usuários aparecem na tabela', () => {
  cy.confirmMultipleUsers()
})

And('valido que há mais de 5 registros na tabela', () =>{
    cy.validateMoreThanFiveUsers()
})

And('altero a quantidade de exibição na tela para 5 registros',() =>{
    cy.selectRowsPage()
})

And('clico no botão Next da paginação',() =>{
    cy.nextPage()
})

Then('a próxima página de registros é exibida', () => {
  cy.confirmNextPage()
})