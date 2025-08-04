Feature: Playwright Homepage

  Scenario: Navigate to homepage and verify navigation bar
    Given I navigate to the homepage
    Then I should see the navigation bar

  Scenario: Click Get Started and verify URL
    Given I navigate to the homepage
    When I click on the Get started link
    Then I should be on the intro page

