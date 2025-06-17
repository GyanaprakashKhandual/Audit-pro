import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


const selectors = {
  name: '#wpforms-1093-field_0',
  mobile: '#wpforms-1093-field_4',
  email: '#wpforms-1093-field_1',
  message: '#wpforms-1093-field_2',
  submit: '#wpforms-submit-1093',
  confirmation: '//*[@id="wpforms-confirmation-1093"]',
  error: '.wpforms-error'
};

Given("the user is on the Emerge Capital contact page", () => {
  cy.visit("https://emergecapital.in/contact/");
});

When("the user enters {string} into the Name field", (name) => {
  cy.get(selectors.name).clear().type(name);
});

When("the user enters {string} into the Mobile field", (mobile) => {
  cy.get(selectors.mobile).clear().type(mobile);
});

When("the user enters {string} into the Email field", (email) => {
  cy.get(selectors.email).clear().type(email);
});

When("the user enters {string} into the Message field", (message) => {
  cy.get(selectors.message).clear().type(message);
});

When("the user clicks the Submit button", () => {
  cy.get(selectors.submit).click();
});

Then("the success message should be visible", () => {
  cy.xpath(selectors.confirmation).should('contain.text', 'Thanks for contacting us! We will be in touch with you shortly.');
});

Then("validation errors should be displayed", () => {
  cy.get(selectors.error).should('exist');
});

When("the user enters a long message of 1000 characters", () => {
  const longMessage = 'x'.repeat(1000);
  cy.get(selectors.message).clear().type(longMessage);
});
