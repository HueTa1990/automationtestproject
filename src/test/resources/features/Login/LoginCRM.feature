Feature: Login to CRM
  As a user, I want to be able to log into the CRM system
  So that I can manage customer information

  Scenario: Successful login
    Given I am on the login page
    When I enter my username and password
    And I click the Login button
    Then I should be taken to the Dashboard page
    And I should see the "Customers" menu
    And I should see the notification displays

#  Example: eating
#    Given there are "20" cucumbers
#    When I eat "10" cucumbers
#    Then I should have "10" cucumbers
#
#  Example: eating
#    Given there are "20" cucumbers
#    When I eat "15" cucumbers
#    Then I should have "5" cucumbers

  Scenario Outline: eating
    Given there are "<start>" cucumbers
    When I eat "<eat>" cucumbers
    Then I should have "<left>" cucumbers

    Examples:
      | start | eat | left |
      |    12 |   5 |    7 |
      |    20 |   5 |   15 |