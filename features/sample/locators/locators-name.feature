Feature: Locators CSS Name
	Scenario: Amazon search for css name
		Given browser is at Amazon
    When user searches "hotdog"
    Then result for hotdog is shown
