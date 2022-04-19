Cypress.Commands.add('login', (email, pass) => {
  cy.get('input[data-test="email"]').type(email)
  cy.get('input[data-test="passwd"]').type(pass)
  cy.get('button').contains('Entrar').click()
})

Cypress.Commands.add('register', (nome, email, pass) => {
  cy.get('input[type="text"]').type(nome)
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(pass)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginSession', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/')
    cy.get('input[data-test="email"]').type(email)
    cy.get('input[data-test="passwd"]').type(password)
    cy.get('button').contains('Entrar').click()
  })
})
