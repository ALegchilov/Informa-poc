Feature: Footer

  @smoke
  Scenario Outline: [STAN-11735] Verify copyright text and clicking footer logo redirects to the Homepage
    When I open '{$baseUrl}<resource>' url
    And I expect text of 'Home Page > Footer > Copyright Text' to contain 'Copyright © {$fullYear}'
    And I click 'Home Page > Footer > Logo'
    And I expect current url to equal '$baseUrl'

    Examples:
      | resource      |
      | documents     |
      | videos        |
      | podcasts      |
      | slideshows    |
      | webinars      |
      | events        |
      | search/q=corn |
      | weather       |
      | commodities   |
      | newsletter    |