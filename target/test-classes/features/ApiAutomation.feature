Feature: API Automation using Restassured

@Sanity @Smoke_Test @Test_Scenario_1
Scenario Outline: Search and fetch the emails in comments for an user using API and validate the same 
    When I hit api to fetch users
    Then I search for "<user>"
    And I search post for the mentioned user
    Then I search and fetch the comments for post and validate the emails
   Examples:
   | api_url      				|	  user 	   |
   | http://localhost:3000/    	|   Delphine   |
   | http://localhost:3000/    	|   Samantha   |
   | http://localhost:3000/    	|   Maxime_Nienow   |
    