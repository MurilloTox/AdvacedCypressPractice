Feature: Navigation throught headers

Background:
    Given I'm in the homepage

@justAFrame
Scenario: Visit contact header
    When I click on the contact option
    Then a form should be displayed

@justAFrame
Scenario: Visit about us header
    When I click on the about us option
    Then a video should be visible