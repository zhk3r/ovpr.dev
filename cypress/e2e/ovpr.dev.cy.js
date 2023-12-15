describe('ovpr.dev', () => {
  beforeEach(() => {
    cy.visit('/') // Visit the home page before each test
  })

  it('displays welcome text', () => {
    cy.get('h1') // Select the h1 element
      .contains('ovpr.dev'); // Check if it contains the welcome text
  })

  it('has correct repository links', () => {
    // Test if the repository links are as expected
    cy.get('a.repo-button').each(($el) => { // Select all repository buttons and iterate
      expect($el.prop('href')).to.satisfy(url => 
        url.includes('https://github.com/zhk3r/check') || 
        url.includes('https://github.com/zhk3r/ovpr.dev') // Check if href includes the correct URLs
      );
    });
  })
})
