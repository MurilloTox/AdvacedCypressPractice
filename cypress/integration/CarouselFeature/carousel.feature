Feature: Test the items carrusel

Background:
    Given I visit the homepage

Scenario: Change the items in the carousel one time
    When I click on the arrow
    Then the item displayed should be different