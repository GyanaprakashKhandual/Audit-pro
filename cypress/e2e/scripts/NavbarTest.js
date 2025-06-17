import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("the user is on the Emerge Capital homepage", () => {
  cy.visit("https://emergecapital.in");
});

Then('the {string} link should be visible', (linkText) => {
  cy.contains('a', linkText).should('be.visible');
});

When('the user clicks on the {string} link', (linkText) => {
  cy.contains('a', linkText).click();
});

Then('the {string} section should be displayed', (sectionText) => {
  cy.contains(sectionText, { matchCase: false }).should('be.visible');
});

Then('the {string} link should not be visible', (linkText) => {
  cy.contains('a', linkText).should('not.exist');
});

When('the user attempts to click on the {string} link', (linkText) => {
  cy.contains('a', linkText).then($el => {
    if ($el.length) {
      cy.wrap($el).click();
    } else {
      cy.log(`Link "${linkText}" not found.`);
    }
  });
});

Then('the {string} section should not be displayed', (sectionText) => {
  cy.contains(sectionText).should('not.exist');
});
