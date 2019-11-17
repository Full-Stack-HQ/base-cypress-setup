import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I search for (.*)$/, (text: string) => {
  cy.searchGoogle(text);
});