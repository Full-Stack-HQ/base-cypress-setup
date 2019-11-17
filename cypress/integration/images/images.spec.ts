import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open Google images page', () => {
  cy.visit('/imghp')
});