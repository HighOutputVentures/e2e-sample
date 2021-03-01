Feature: Locators Class
@ignore
	Scenario: Amazon search for class
		Given browser is at Amazon
    When user searches "hotdog" in class search
    Then result for hotdog is shown
