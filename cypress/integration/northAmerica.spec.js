describe('Wikipedia', function () {
  it('Canada', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('North America');
    cy.get('.suggestions-result').first().click();
    cy.contains('Canada');
  });

  it(
    'should fail',
    {
      retries: 2,
    },
    function () {
      cy.visit('/');
      cy.get('#simpleSearch').type('North America');
      cy.get('.suggestions-result').first().click();
      expect(1).to.equal(2);
    }
  );
  xit('skip', function () {
    cy.visit('/');
    cy.get('#simpleSearch').type('North America');
    cy.get('.suggestions-result').first().click();
    cy.contains('Germany');
  });
});
