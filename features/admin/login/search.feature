Feature: Google

	Scenario: google search by pressing keyboard enter Key
		Given browser is at Google
    When user search "RED"
    Then related page about RED is shown

  Scenario: google search by pressing seach button
    Given browser is at Google
    When user enters "BLUE" at search bar
    And clicks search button
    Then related page about BLUE is shown
  