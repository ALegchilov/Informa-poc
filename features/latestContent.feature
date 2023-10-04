@smoke
Feature: Latest Content

  Scenario Outline: [STAN-14937] Navigate to review latest "<contentType>" content
    When I navigate to a "<contentType>" latest content page
    Then I expect number of elements in 'Latest Content Page > Preview Content Titles' collection to be above '0'
    And I expect number of elements in 'Latest Content Page > Preview Right Bar Titles' collection to be above '0'
    And I save text of 'Latest Content Page > #2 of Preview Content Titles' as 'previewTitle'
    When I click 'Latest Content Page > #2 of Preview Content Titles'
    And I wait until 'Article Page' to be visible
    Then I save text of 'Article Page > Article Title' as 'articleTitle'
    And I expect '$toLowerCase($articleTitle)' to equal '$toLowerCase($previewTitle)'

    Examples:
      | contentType     |
      | News            |
      | Commentary      |
      | Press release   |
      | Interviews      |
      | How to          |
      | Case studies    |
      | Glossary        |
      | Industry trends |

  Scenario Outline: [STAN-14937] Navigate back via breadcrumbs with "<contentType>" latest content
    When I navigate to a "<contentType>" latest content page
    And I click 'Latest Content Page > #1 of Breadcrumbs'
    Then I expect 'Home Page' to be visible

    Examples:
      | contentType     |
      | News            |
      | Commentary      |
      | Press release   |
      | Interviews      |
      | How to          |
      | Case studies    |
      | Glossary        |
      | Industry trends |