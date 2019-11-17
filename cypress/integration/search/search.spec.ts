import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open Google home page', () => {
  cy.visit('/')
});

