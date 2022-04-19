/// <reference types= "cypress" /> 

describe('Login Suite', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login - Realizar login com sucesso', () => {
    cy.login('a@a', 'a')
    // cy.loginSession('a@a', 'a')
    cy.get('.toast-message').should('have.text', 'Bem vindo, a!')
  })

  it('Login - Realizar login com email inválido', () => {
    cy.login('teste@aquino', 'a')
    cy.get('.toast-message').should('have.text', 'Erro: Error: Request failed with status code 400')
  })

  it('Login - Realizar login com senha inválida', () => {
    cy.login('a@a', 'teste')
    cy.get('.toast-message').should('have.text', 'Erro: Error: Request failed with status code 401')
  })
})