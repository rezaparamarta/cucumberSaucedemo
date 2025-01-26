Feature: Login Test

  Scenario: Success Login
    Given User is on the login page
    And User input "standard_user" as username and "secret_sauce" as password
    When User click on the login button
    Then I should be on the dashboard page

  Scenario: Make sure user is on dashboard page
    Given User is on the dashboard page
    Then User is validate on dashboard page

  Scenario: Success added to cart
    Given User is on the dashboard page
    Then User click an item on home view product page
    And User validate item on view detail product
    And User add item by click button add


