Feature: Navigation throught headers

Background:
    Given I'm in the homepage
    And i made a GET request to "https://www.demoblaze.com/index.html"

@smoke @justAFrame
Scenario: Visit contact header
    When I click on the contact option
    Then a form should be displayed
    And i should obtain a status code of 200

@smoke @justAFrame
Scenario: Visit about us header
    When I click on the about us option
    Then a video should be visible
    And i should obtain a status code of 200

@smoke @regression
Scenario: Visit the cart page
    When I click on the cart option
    Then the place order button should be displayed
    And i should obtain a status code of 200
