
describe('When I visit Google', () => {
  beforeEach(() => {
    cy.visit('/imghp')
  })

  it('I should be able to search', () => {
    cy.searchGoogle('cat pictures')
  })
});