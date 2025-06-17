Feature: Emerge Capital Navbar Navigation

  Background:
    Given the user is on the Emerge Capital homepage

  Scenario: All navbar links are visible
    Then the "Home" link should be visible
    And the "About" link should be visible
    And the "Portfolio" link should be visible
    And the "Sponsors" link should be visible
    And the "Contact" link should be visible

  Scenario: Navigate to Home section
    When the user clicks on the "Home" link
    Then the "Home" section should be displayed

  Scenario: Navigate to About section
    When the user clicks on the "About" link
    Then the "About" section should be displayed

  Scenario: Navigate to Portfolio section
    When the user clicks on the "Portfolio" link
    Then the "Portfolio" section should be displayed

  Scenario: Navigate to Sponsors section
    When the user clicks on the "Sponsors" link
    Then the "Sponsors" section should be displayed

  Scenario: Navigate to Contact section
    When the user clicks on the "Contact" link
    Then the "Contact" section should be displayed

  # --------------------
  # NEGATIVE TEST CASES
  # --------------------

  Scenario: Link with incorrect text should not be visible
    Then the "Investors" link should not be visible

  Scenario: Section text mismatch should fail visibility check
    When the user clicks on the "Home" link
    Then the "Welcome to Emerge" section should not be displayed

  Scenario: Incorrect casing in section should fail
    When the user clicks on the "Contact" link
    Then the "contact" section should not be displayed
