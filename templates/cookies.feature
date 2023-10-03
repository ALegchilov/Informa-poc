Feature: Cookies

Scenario: cookies are set in browser
  When I set "OptanonConsent" cookie as "isGpcEnabled=0&datestamp=Fri+May+19+2023+14%3A45%3A10+GMT%2B0200+(Central+European+Summer+Time)&version=202301.2.0&isIABGlobal=false&hosts=&consentId=a8a88093-e5d7-4dcb-b64f-1dd14b491e15&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0"
  And I set "OptanonAlertBoxClosed" cookie as "2023-05-19T12:45:10.535Z"