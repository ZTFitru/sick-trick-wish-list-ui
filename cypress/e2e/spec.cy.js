describe('empty spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'cards'
    }).as('oneCard')
    cy.visit('http://localhost:3000/?stance=Regular')
  })
  it('should display the main page when it loads', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List')
  })

  it('should check form being filled and value refecting the input', ()=> {
    cy.get('#stance').select('regular')
    cy.get('form > :nth-child(2)').type('dog')
    cy.get('form > :nth-child(3)').select('ledge')
    cy.get('[value=""]').type('popcorn')
    cy.get('button').click()
    cy.get('.main-cont > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(1)').should('contain', 'dog')
    cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'ledge')
    cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'popcorn')
  })
})