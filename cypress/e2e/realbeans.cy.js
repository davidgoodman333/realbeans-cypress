describe('RealBeans shop basic checks', () => {
  it('loads the Cypress example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })

  it('shows the Commands section', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Commands').should('be.visible')
  })

  it('has a GitHub link', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('GitHub').should('be.visible')
  })
})
