describe('Skipper', function () {
  before(() => {
    throw new Error('Skip me!');
  });
  it('A ', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('Africa');
    cy.get('.suggestions-result').first().click();
    cy.scrollTo(0, 1200);
    cy.contains('giraffes');
  });
  it('B ', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('Africa');
    cy.get('.suggestions-result').first().click();
    cy.scrollTo(0, 1200);
    cy.contains('giraffes');
  });
});
