Feature: Test the items carrusel

Background:
    Given I'm in the homepage

@smoke
Scenario: Change the items in the carousel to the right
    When I click on the right arrow
    Then the item displayed should be the second slide

@smoke
Scenario: Change the items in the carousel to the left
    When I click on the left arrow
    Then the item displayed should be the third slide

@smoke
Scenario: Don't change the items in the carousel
    Then the item displayed should be the first slide
