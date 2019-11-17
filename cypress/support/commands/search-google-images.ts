
export function searchGoogleImages(searchText: string): void {
  cy.visit('/imghp');
  cy.get('input[title="Search"]')
      .type('cat pictures{enter}');
}

Cypress.Commands.add('searchGoogleImages', searchGoogleImages);

declare global {
  namespace Cypress {
    interface Chainable {
      searchGoogleImages: typeof searchGoogleImages 
    }
  }
}