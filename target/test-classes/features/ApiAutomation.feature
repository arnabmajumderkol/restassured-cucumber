@Test_API
Feature: API Automation using Restassured

@Sanity @Smoke_Test @Test_Scenario_1
Scenario Outline: Search and fetch the emails in comments for an user using API and validate the same 
    When I hit api to fetch users
    Then I search for "<user>"
    And I search post for the mentioned user
    Then I search and fetch the comments for post and validate the emails
   Examples:
   |	  user 	   |
   |   Delphine   |
   |   Samantha   |
   |   Maxime_Nienow   |
   

@Sanity @Smoke_Test @Test_Scenario_2
Scenario Outline: Validate post title and body which is mandatory
    When I hit api to fetch users
    Then I search for "<user>"
    And I search post for the mentioned user
    Then I validate mandatory for the post title and body
   Examples:
   |	  user 	   |
   |   Elwyn.Skiles   |
  
    