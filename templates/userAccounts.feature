Feature: User Accounts

  Scenario: I login with US based user from '<state>'
    Given I save '$getUserByState("<state>")' to memory as 'user'
    When I click 'Home Page > Sign In Button'
    Then I wait until 'Home Page > Iiris Box' to be visible
    When I type '$user.email' to 'Home Page > Iiris Box > Email Input'
    And I type '$user.password' to 'Home Page > Iiris Box > Password Input'
    And I click 'Home Page > Iiris Box > Login With Email Button'
    And I expect 'Home Page > My Account Button' to be visible

  Scenario: I login with non-US based user from '<country>'
    Given I save '$getUserByCountry("<country>")' to memory as 'user'
    When I click 'Home Page > Sign In Button'
    Then I wait until 'Home Page > Iiris Box' to be visible
    When I type '$user.email' to 'Home Page > Iiris Box > Email Input'
    And I type '$user.password' to 'Home Page > Iiris Box > Password Input'
    And I click 'Home Page > Iiris Box > Login With Email Button'
    And I expect 'Home Page > My Account Button' to be visible

