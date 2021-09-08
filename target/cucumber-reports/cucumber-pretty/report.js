$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApiAutomation.feature");
formatter.feature({
  "line": 1,
  "name": "API Automation using Restassured",
  "description": "",
  "id": "api-automation-using-restassured",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    },
    {
      "line": 3,
      "name": "@Test_Scenario_1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I search for \"\u003cuser\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;",
  "rows": [
    {
      "cells": [
        "api_url",
        "user"
      ],
      "line": 10,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;1"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "Delphine"
      ],
      "line": 11,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;2"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "Samantha"
      ],
      "line": 12,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;3"
    },
    {
      "cells": [
        "http://localhost:3000/",
        "Maxime_Nienow"
      ],
      "line": 13,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I search for \"Delphine\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 4507608800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delphine",
      "offset": 14
    }
  ],
  "location": "APIAutomationStepDefinition.i_search_for(String)"
});
formatter.result({
  "duration": 2328800,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 232220000,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 744760700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I search for \"Samantha\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 77504400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 14
    }
  ],
  "location": "APIAutomationStepDefinition.i_search_for(String)"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 51839800,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 694632400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 3,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I search for \"Maxime_Nienow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 65389200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maxime_Nienow",
      "offset": 14
    }
  ],
  "location": "APIAutomationStepDefinition.i_search_for(String)"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 79583400,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 700342100,
  "status": "passed"
});
});