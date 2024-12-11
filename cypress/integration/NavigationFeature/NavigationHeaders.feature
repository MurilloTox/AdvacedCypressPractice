Feature: Navigation throught headers

Background:
    Given i made a GET request to "https://www.demoblaze.com/index.html"
    And I'm in the homepage


@justAFrame
Scenario: Visit contact header
    When I click on the contact option
    Then a form should be displayed
    And i should obtain a status code of 200

@justAFrame
Scenario: Visit about us header
    When I click on the about us option
    Then a video should be visible
    And i should obtain a status code of 200


Scenario: Visit the cart page
    When I click on the cart option
    Then the place order button should be displayed
    And i should obtain a status code of 200