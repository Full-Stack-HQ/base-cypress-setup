
export function searchGoogle(searchText: string): void {
  cy.get('input[title="Search"]')
      .type(`${searchText}{enter}`);
}

Cypress.Commands.add('searchGoogle', searchGoogle);

declare global {
  namespace Cypress {
    interface Chainable {
      searchGoogle: typeof searchGoogle 
    }
  }
}