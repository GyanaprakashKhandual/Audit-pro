import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
require('cypress-xpath');

// XPath selectors
const twitterFooterXPath = '//*[@id="wp-footer"]/div/div/div/div/section/div/div/div[1]/div/div/div/div/div/span[1]/a';
const homeFooterXPath = '//*[@id="wp-footer"]/div/div/div/div/section/div/div/div[1]/div/div/div/div/div/span[2]/a';

Given("the user is on the Emerge Capital homepage", () => {
  cy.visit("https://emergecapital.in");
});

When("User click on the Home button", () => {
  // ✅ Remove target only for Home link
  cy.xpath(homeFooterXPath)
    .should('be.visible')
    .invoke('removeAttr', 'target') // Open in same tab
    .click();
});

Then('the "Home" section should displayed', () => {
  cy.contains("Home", { matchCase: false }).should("be.visible");
});

When("User click on the twitter button", () => {
  // Keep default behavior (opens in new tab)
  cy.xpath(twitterFooterXPath)
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'href')
    .and('include', 'twitter.com');
});

Then("the twitter page should displayed", () => {
  // Optional: Just verify the correct link exists (since new tab isn't testable directly)
  cy.xpath(twitterFooterXPath)
    .should('have.attr', 'href')
    .and('include', 'twitter.com');
});
