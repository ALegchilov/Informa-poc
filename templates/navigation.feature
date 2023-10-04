Feature: Navigation
  
  Scenario: I navigate to a "<content>" latest content page
    When I open '{$baseUrl}latest-{$toLowerKebabCase("<content>")}/?welcad=off' url