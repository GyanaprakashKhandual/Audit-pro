Feature: Contact Form on Emerge Capital

  Background:
    Given the user is on the Emerge Capital contact page

  # Positive Case
  Scenario: Submit the contact form with valid data
    When the user enters "John Doe" into the Name field
    And the user enters "9876543210" into the Mobile field
    And the user enters "john@example.com" into the Email field
    And the user enters "I am interested in your services." into the Message field
    And the user clicks the Submit button
    Then the success message should be visible

  # Negative Case: Submit empty form
  Scenario: Submit the contact form with empty fields
    When the user clicks the Submit button
    Then validation errors should be displayed

  # Negative Case: Invalid email
  Scenario: Submit the contact form with invalid email
    When the user enters "Alice" into the Name field
    And the user enters "9999999999" into the Mobile field
    And the user enters "invalid-email" into the Email field
    And the user enters "Just checking." into the Message field
    And the user clicks the Submit button
    Then validation errors should be displayed

  #  Edge Case: Very long message
  Scenario: Submit the contact form with long message
    When the user enters "Chris" into the Name field
    And the user enters "8888888888" into the Mobile field
    And the user enters "chris@example.com" into the Email field
    And the user enters a long message of 1000 characters
    And the user clicks the Submit button
    Then the success message should be visible
