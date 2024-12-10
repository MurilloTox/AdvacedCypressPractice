Feature: Test the items carrusel

Background:
    Given I'm in the homepage

Scenario: Change the items in the carousel one time
    When I click on the right arrow 1 time
    Then the item displayed should be the second slide

Scenario: Change the items in the carousel two times
    When I click on the left arrow 2 time
    Then the item displayed should be the second slide

Scenario: Change the items in the carousel three times
    When I click on the right arrow 3 time
    Then the item displayed should be the first slide
