import { faker } from '@faker-js/faker'
 
export const BTN_ADD = '#addNewRecordButton'
export const INPUT_FIRST_NAME = '#firstName'
export const INPUT_LAST_NAME = '#lastName'
export const INPUT_EMAIL = '#userEmail'
export const INPUT_AGE = '#age'
export const INPUT_SALARY = '#salary'
export const INPUT_DEPARTMENT = '#department'
export const BTN_SUBMIT = '#submit'
export const TABLE = '.web-tables-wrapper'
export const BTN_EDIT = '.mr-2'
export const INPUT_SEARCH = '#searchBox'
export const BTN_DELETE = '[id*="delete-record"]'
export const BTN_CLOSE = '.close'
export const LIST_MULTIPLE_RANDOM_USER = []
export const SELECT_ROWS = '.-pageSizeOptions select'
export const BTN_NEXT = '.-next'
export const NUMBER_PAGINA = '.-pageJump input'

Cypress.Commands.add('addNewRecord', () =>{
    cy.get(BTN_ADD).click({force:true})
})

Cypress.Commands.add('formCompleted', () =>{
    cy.get(INPUT_FIRST_NAME).type(Cypress.env('firstName'), {log: false})
    cy.get(INPUT_LAST_NAME).type(Cypress.env('lastName'), {log: false})
    cy.get(INPUT_EMAIL).type(Cypress.env('userEmail'), {log: false})
    cy.get(INPUT_AGE).type(Cypress.env('age'), {log: false})
    cy.get(INPUT_SALARY).type(Cypress.env('salary'), {log: false})
    cy.get(INPUT_DEPARTMENT).type(Cypress.env('department'), {log: false})
})

Cypress.Commands.add('clickSubmit', () =>{
    cy.get(BTN_SUBMIT).click({force:true})
})

Cypress.Commands.add ('confirmRegistration', () => {
    cy.get(TABLE).within(() => {
    cy.contains('.rt-tr-group', Cypress.env('firstName')).within(() => {
    cy.get('.rt-td').eq(0).should('contain', Cypress.env('firstName'))
    cy.get('.rt-td').eq(1).should('contain', Cypress.env('lastName'))
    cy.get('.rt-td').eq(2).should('contain', Cypress.env('age'))
    cy.get('.rt-td').eq(3).should('contain', Cypress.env('userEmail'))
    cy.get('.rt-td').eq(4).should('contain', Cypress.env('salary'))
    cy.get('.rt-td').eq(5).should('contain', Cypress.env('department'))
    })
        })
})

Cypress.Commands.add('editUser', () =>{
    cy.get(TABLE).within(() => {
    cy.contains('.rt-tr-group', Cypress.env('firstName'))
        .find(BTN_EDIT) 
        .click({ force: true })
  })
    cy.get(INPUT_AGE).clear()
    cy.get(INPUT_AGE).type(Cypress.env('newAge'), {log: false})
    cy.get(INPUT_SALARY).clear().type(Cypress.env('newSalary'), {log: false})
    cy.get(INPUT_DEPARTMENT).clear()
    cy.get(INPUT_DEPARTMENT).type(Cypress.env('newDepartment'), {log: false})
})

Cypress.Commands.add ('confirmEdit', () => {
    cy.get(INPUT_SEARCH).type(Cypress.env('firstName'), {log: false})
    cy.get(TABLE).within(() => {
    cy.contains('.rt-tr-group', Cypress.env('firstName')).within(() => {
    cy.get('.rt-td').eq(0).should('contain', Cypress.env('firstName'))
    cy.get('.rt-td').eq(1).should('contain', Cypress.env('lastName'))
    cy.get('.rt-td').eq(2).should('contain', Cypress.env('newAge'))
    cy.get('.rt-td').eq(3).should('contain', Cypress.env('userEmail'))
    cy.get('.rt-td').eq(4).should('contain', Cypress.env('newSalary'))
    cy.get('.rt-td').eq(5).should('contain', Cypress.env('newDepartment'))
    })
        })
    cy.get(INPUT_SEARCH).clear()
})

Cypress.Commands.add('deleteUser', () =>{
    cy.get(TABLE).within(() => {
    cy.contains('.rt-tr-group', Cypress.env('firstName'))
        .find(BTN_DELETE) 
        .click({ force: true })
  })
})

Cypress.Commands.add ('confirmDelete', () => {
    cy.get(TABLE).should('not.contain', Cypress.env('firstName'))
})

Cypress.Commands.add('closeForm', () =>{
    cy.get(BTN_CLOSE).click({force:true})
})

Cypress.Commands.add ('confirmForm', () => {
    cy.get(INPUT_FIRST_NAME).should('have.value', Cypress.env('firstName'))
    cy.get(INPUT_LAST_NAME).should('have.value', Cypress.env('lastName'))
    cy.get(INPUT_EMAIL).should('have.value', Cypress.env('userEmail'))
    cy.get(INPUT_AGE).should('have.value', Cypress.env('age'))
    cy.get(INPUT_SALARY).should('have.value', Cypress.env('salary'))
    cy.get(INPUT_DEPARTMENT).should('have.value', Cypress.env('department'))
})

Cypress.Commands.add('clearFormFields', () => {
    cy.get(INPUT_FIRST_NAME).clear()
    cy.get(INPUT_LAST_NAME).clear()
    cy.get(INPUT_EMAIL).clear()
    cy.get(INPUT_AGE).clear()
    cy.get(INPUT_SALARY).clear()
    cy.get(INPUT_DEPARTMENT).clear()
})

Cypress.Commands.add('addMultipleRandomUsers', (count) => {
  LIST_MULTIPLE_RANDOM_USER.length = 0
  for (let i = 0; i < count; i++) {
    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      userEmail: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 65 }).toString(),
      salary: faker.number.int({ min: 2000, max: 20000 }).toString(),
      department: faker.commerce.department(),
    }
    LIST_MULTIPLE_RANDOM_USER.push(user)

    cy.addNewRecord()
    cy.clearFormFields()
    cy.get(INPUT_FIRST_NAME).type(user.firstName)
    cy.get(INPUT_LAST_NAME).type(user.lastName)
    cy.get(INPUT_EMAIL).type(user.userEmail)
    cy.get(INPUT_AGE).type(user.age)
    cy.get(INPUT_SALARY).type(user.salary)
    cy.get(INPUT_DEPARTMENT).type(user.department)
    cy.clickSubmit()
  }
})

Cypress.Commands.add('confirmMultipleUsers', () => {
    LIST_MULTIPLE_RANDOM_USER.forEach(user => {
        cy.get(TABLE).within(() => {
            cy.contains('.rt-tr-group', user.firstName).within(() => {
                cy.get('.rt-td').eq(0).should('contain', user.firstName)
                cy.get('.rt-td').eq(1).should('contain', user.lastName)
                cy.get('.rt-td').eq(2).should('contain', user.age)
                cy.get('.rt-td').eq(3).should('contain', user.userEmail)
                cy.get('.rt-td').eq(4).should('contain', user.salary)
                cy.get('.rt-td').eq(5).should('contain', user.department)
            })
        })
    })
})


Cypress.Commands.add('validateMoreThanFiveUsers', () => {
    cy.get('.rt-tbody .rt-tr-group').should(($rows) => {
  expect($rows).to.have.length.of.at.least(6)
})
})

Cypress.Commands.add('selectRowsPage', () => {
    cy.get(SELECT_ROWS).select('5')
})

Cypress.Commands.add('nextPage', () => {
    cy.get(BTN_NEXT).click()
})

Cypress.Commands.add('confirmNextPage', () => {
    cy.get(NUMBER_PAGINA).should('have.value', '2')
})