describe('ovpr.dev pt', () => {
  beforeEach(() => {
    cy.visit('/') // Visit the home page before each test
  })

  it('displays welcome text', () => {
    cy.get('h1') // Select the h1 element
      .contains('ovpr.dev'); // Check if it contains the welcome text
  })

  it('has functional repository links', () => {
    cy.get('a.repo-button') // Select all repository buttons
      .each(($el) => {
        cy.wrap($el) // Wrap each button for individual testing
          .should('have.attr', 'href') // Check if it has an href attribute
          .and('include', 'github.com/ovpr-dev'); // Ensure the href includes the correct URL
      })
  })
})
