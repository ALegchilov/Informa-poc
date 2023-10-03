@theme1 @smoke @userAccount @XL @LG
Feature: [STAN-9740] Registered user can sign out from site account.

  Background:
    Given I open '$baseUrl' url
    And cookies are set in browser

  Scenario: Registered user can sign out from Header
    Given I login with non-US based user from 'Colombia'
    When I click 'Home Page > My Account Button'
    Then I click 'Home Page > My Account Menu > Log Out Button'
    And I expect 'Home Page > My Account Button' not to be visible

  Scenario: Registered user can sign out from Mega menu
    Given I login with US based user from 'California'
    When I click 'Home Page > Mega Menu Button'
    And I click 'Home Page > Mega Menu'
    And I click 'Home Page > Mega Menu > Log Out Button'
    Then I expect 'Home Page > My Account Button' not to be visible
