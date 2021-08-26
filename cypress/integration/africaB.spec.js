describe('Wikipedia', function () {
  it('Africa ', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('Africa');
    cy.get('.suggestions-result').first().click();
    cy.scrollTo(0, 1200);
    cy.contains('giraffes');
  });
});
