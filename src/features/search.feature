Feature: Site Search

  Scenario: Search and follow a result
    Given I navigate to the homepage
    When I search for "people"
    Then I follow the first search result for "people"