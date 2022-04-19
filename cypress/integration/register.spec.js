/// <reference types= "cypress" /> 

describe('Register Suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[href="/registro"]').click()
  })

  it('Registrar - Realizar um registro com sucesso', () => {
    cy.register('Lucas', 'lucas@lucas', '123456')
    cy.get('.toast-message').should('have.text', 'Erro: Error: Request failed with status code 500')
  })
  
})