Feature: Emerge Capital Footer Navigation

  Background:
    Given the user is on the Emerge Capital homepage

  Scenario: Reload the page 
    When User click on the Home button 
    Then the "Home" section should displayed

  Scenario: Open the Twitter 
    When User click on the twitter button
    Then the twitter page should displayed
