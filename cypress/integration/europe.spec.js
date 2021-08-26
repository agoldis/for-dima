describe('Wikipedia', function () {
  it('Europe', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('Europe');
    cy.get('.suggestions-result').first().click();
    cy.scrollTo(0, 1200);
    cy.contains('Germany');
  });
});
