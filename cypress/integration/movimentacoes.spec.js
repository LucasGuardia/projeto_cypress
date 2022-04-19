/// <reference types= "cypress" /> 

let chance = require('chance').Chance();

describe('Movimentacoes Suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('a@a', 'a')
    cy.get('[data-test="menu-movimentacao"]').click()
  })

  it('Cadastrar uma movimentacão com sucesso', () => {
    let description = chance.sentence({ words: 5})
    let value = chance.integer({ min: 0, max: 1000 })
    let interest = chance.name()
    let accounts = []
    cy.get('#descricao').type(description)
    cy.get('[data-test="valor"]').type(value)
    cy.get('[data-test="envolvido"]').type(interest)
    cy.get('[data-test="conta"] option').each((val) => {
      cy.wrap(val).invoke('val').then((values) => {
        accounts.push(values)
      })
    })
  })
});



        
  