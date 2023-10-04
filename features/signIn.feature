@smoke
Feature: Registered user can sign in with proper credentials

  Jira [STAN-9739]
  Feature is applicable only for sites with user account enabled:
  "Informa Markets Division" has registration option
  "Informa Tech Division" has no registration option

  Background:
    Given I open '$baseUrl' url
    And cookies are set in browser
    And I expect 'Home Page > My Account Button' not to be visible

  Scenario: Registered user can sign in with email/password from Header
    When I click 'Home Page > Sign In Button'
    Then I wait until 'Home Page > Iiris Box' to be visible
    When I type '$getAutomationUser().email' to 'Home Page > Iiris Box > Email Input'
    And I type '$getAutomationUser().password' to 'Home Page > Iiris Box > Password Input'
    And I click 'Home Page > Iiris Box > Login With Email Button'
    And I expect 'Home Page > My Account Button' to be visible

  Scenario: Registered user can sign in with email/password from Mega menu
    When I click 'Home Page > Mega Menu Button'
    And I click 'Home Page > Mega Menu > Sign In Button'
    Then I wait until 'Home Page > Iiris Box' to be visible
    When I type '$getAutomationUser().email' to 'Home Page > Iiris Box > Email Input'
    And I type '$getAutomationUser().password' to 'Home Page > Iiris Box > Password Input'
    And I click 'Home Page > Iiris Box > Login With Email Button'
    And I expect 'Home Page > My Account Button' to be visible
