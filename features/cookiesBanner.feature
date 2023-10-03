@smoke
Feature: Cookie Banner review

  Background:
    Given I open '$baseUrl' url
    And I wait until "Home Page > Cookie Banner" to be visible

  Scenario: [STAN-9721] Check that cookie banner appears on the site visit
    When I expect 'href' attribute of "Home Page > Cookie Banner > Privacy Policy Link" to equal 'https://www.informa.com/privacy-policy/'
    Then I click "Home Page > Cookie Banner > Accept Button"
    And I expect "Home Page > Cookie Banner" not to be visible

  Scenario: [STAN-9721] Close Cookie Banner
    When I click "Home Page > Cookie Banner > Close Button"
    Then I expect "Home Page > Cookie Banner" not to be visible
