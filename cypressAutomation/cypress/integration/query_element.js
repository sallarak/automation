describe('My first test', function() {
   it('finds the content "type"', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type')
   })

})
