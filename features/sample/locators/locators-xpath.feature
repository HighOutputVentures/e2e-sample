Feature: Locators XPATH

	Scenario: Amazon search for xpath
		Given browser is at Amazon
    When user clicks Cart
    Then cart empty page is shown
