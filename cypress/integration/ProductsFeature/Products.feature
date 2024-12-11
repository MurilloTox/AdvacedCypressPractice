Feature: Flow for the products

Background: 
    Given I'm in the homepage

Scenario:
    When I add to cart 1 product of each category
    And i delete 1 product from the cart
    And i proceed with the purchase
    And i fill my personal information
    Then i should see a confirmation message