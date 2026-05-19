describe('RealBeans Shopify store checks', () => {
  const storeUrl = 'https://realbeans-4.myshopify.com'
  const password = 'shiapu'

  beforeEach(() => {
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('ResizeObserver loop')) {
        return false
      }
    })
  })

  function enterStorePassword(path = '/') {
    cy.visit(`${storeUrl}${path}`)

    cy.get('body').then(($body) => {
      if ($body.text().includes('Enter using password')) {
        cy.contains('Enter using password').click()
        cy.get('input[type="password"]').type(password)
        cy.get('button[type="submit"]').click()
      }
    })

    cy.url().should('include', 'realbeans-4.myshopify.com')
  }

  it('loads the RealBeans homepage', () => {
    enterStorePassword('/')
    cy.get('body').should('contain.text', 'RealBeans')
    cy.get('body').should('contain.text', 'Welcome to our store')
  })

  it('shows the product catalog', () => {
    enterStorePassword('/collections/all')

    cy.get('body').should('contain.text', 'RealBeans Espresso Blend')
    cy.get('body').should('contain.text', 'RealBeans House Roast')
    cy.get('body').should('contain.text', 'RealBeans Decaf Roast')
  })

  it('has an About page link in the storefront navigation', () => {
    enterStorePassword('/')

    cy.get('a[href="/pages/about-realbeans"]')
      .should('exist')
      .and('contain.text', 'About')
  })
})
