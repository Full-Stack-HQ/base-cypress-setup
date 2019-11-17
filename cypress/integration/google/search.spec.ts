
describe('When I visit Google', () => {
  beforeEach(() => {
  })

  it('I should be able to search', () => {
    cy.searchGoogleImages('cat pictures{enter}')
  })
});