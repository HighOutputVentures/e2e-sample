Feature: Admin login

	Scenario: successful login
		Given browser is at Google
    When user search "RED"
    Then I should see red
	
