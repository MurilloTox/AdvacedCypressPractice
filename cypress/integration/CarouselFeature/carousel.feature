Feature: Test the items carrusel

Background:
    Given I'm in the homepage

Scenario: Change the items in the carousel to the right
    When I click on the right arrow
    Then the item displayed should be the second slide

Scenario: Change the items in the carousel tho the left
    When I click on the left arrow
    Then the item displayed should be the third slide

Scenario: Don't change the items in the carousel
    Then the item displayed should be the first slide
