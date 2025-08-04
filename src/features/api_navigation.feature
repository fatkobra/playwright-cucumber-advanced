Feature: API Navigation

  Scenario: Navigate through various API sections
    Given I open the Playwright homepage
    When I navigate through various API sections
    Then I should see the chromium, firefox, and webkit properties listed