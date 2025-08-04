Feature: Theme Toggle

  Scenario: Toggle dark/light theme
    Given Given I open the homepage for theme testing
    When I toggle the theme three times
    Then the theme should change to dark after the second click
    And the theme should return to light after the third click