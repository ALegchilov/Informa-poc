Feature: Search

  @smoke
  Scenario: [STAN-14459] Search for needed information
    When I open '{$baseUrl}search?q=corn' url
    And I expect text of 'Search Page > Search Box Title' to equal 'Search Results'
    And I expect 'Search Page > Search Bar > Search Button' to be visible
    And I expect 'Search Page > Search Bar > Clear Button' to be visible
    And I expect 'value' property of 'Search Page > Search Bar > Search Input' to equal 'corn'
    Then I save number of elements in 'Search Page > Search Result Titles' collection as 'searchResultItemsNumber'
    And I expect text of 'Search Page > Search Result Summary' to contain 'Showing results 1 – {$searchResultItemsNumber}'
    And I expect text of every element in 'Search Page > Search Result Titles' collection to match '[Cc]orn'
    And I expect 'Search Page > Pagination' to be visible

  @smoke
  Scenario: [STAN-14459] No results matching criteria
    When I open '{$baseUrl}search?q=ECMA-262' url
    Then I expect text of 'Search Page > Search Box Title' to equal 'Search Results'
    And I expect 'Search Page > Search Bar > Search Button' to be visible
    And I expect 'Search Page > Search Bar > Clear Button' to be visible
    And I expect 'value' property of 'Search Page > Search Bar > Search Input' to equal 'ECMA-262'
    And I expect number of elements in 'Search Page > Search Result Titles' collection to equal '0'
    And I expect text of 'Search Page > No Results Found Title' to equal 'Sorry, no results found for “ECMA-262”.'
