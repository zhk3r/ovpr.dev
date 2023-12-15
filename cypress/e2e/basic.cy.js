describe('ovpr.dev', () => {
  beforeEach(() => {
    cy.visit('/') // Visit the home page before each test
  })

  it('displays welcome text', () => {
    cy.get('h1') // Select the h1 element
      .contains('just a simple little site'); // Check if it contains the welcome text
  })

  it('has correct repository links', () => {
    // Test if the repository links are as expected
    cy.get('a.repo-button') // Select all repository buttons
      .should('have.attr', 'href') // Check if it has an href attribute
      .then((hrefs) => {
        expect(hrefs).to.include('https://github.com/ovpr-dev/repo1'); // Ensure the first href includes the correct URL
        expect(hrefs).to.include('https://github.com/ovpr-dev/repo2'); // Ensure the second href includes the correct URL
      });
  })
})
