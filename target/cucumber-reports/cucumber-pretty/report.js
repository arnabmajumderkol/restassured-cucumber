$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApiAutomation.feature");
formatter.feature({
  "line": 2,
  "name": "API Automation using Restassured",
  "description": "",
  "id": "api-automation-using-restassured",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test_API"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke_Test"
    },
    {
      "line": 4,
      "name": "@Test_Scenario_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for \"\u003cuser\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;",
  "rows": [
    {
      "cells": [
        "user"
      ],
      "line": 11,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;1"
    },
    {
      "cells": [
        "Delphine"
      ],
      "line": 12,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;2"
    },
    {
      "cells": [
        "Samantha"
      ],
      "line": 13,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;3"
    },
    {
      "cells": [
        "Maxime_Nienow"
      ],
      "line": 14,
      "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_API"
    },
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 4,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for \"Delphine\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 1831309900,
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
  "duration": 2895000,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 254635500,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 2336838700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_API"
    },
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 4,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for \"Samantha\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 53109600,
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
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 44859700,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 2269794200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search and fetch the emails in comments for an user using API and validate the same",
  "description": "",
  "id": "api-automation-using-restassured;search-and-fetch-the-emails-in-comments-for-an-user-using-api-and-validate-the-same;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_API"
    },
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Test_Scenario_1"
    },
    {
      "line": 4,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for \"Maxime_Nienow\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I search and fetch the comments for post and validate the emails",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 47245700,
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
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 209844100,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_and_fetch_the_comments_for_post_and_validate_the_email()"
});
formatter.result({
  "duration": 2267984500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate post title and body which is mandatory",
  "description": "",
  "id": "api-automation-using-restassured;validate-post-title-and-body-which-is-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Sanity"
    },
    {
      "line": 17,
      "name": "@Smoke_Test"
    },
    {
      "line": 17,
      "name": "@Test_Scenario_2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I search for \"\u003cuser\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I validate mandatory for the post title and body",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "api-automation-using-restassured;validate-post-title-and-body-which-is-mandatory;",
  "rows": [
    {
      "cells": [
        "user"
      ],
      "line": 24,
      "id": "api-automation-using-restassured;validate-post-title-and-body-which-is-mandatory;;1"
    },
    {
      "cells": [
        "Elwyn.Skiles"
      ],
      "line": 25,
      "id": "api-automation-using-restassured;validate-post-title-and-body-which-is-mandatory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Validate post title and body which is mandatory",
  "description": "",
  "id": "api-automation-using-restassured;validate-post-title-and-body-which-is-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test_API"
    },
    {
      "line": 17,
      "name": "@Sanity"
    },
    {
      "line": 17,
      "name": "@Test_Scenario_2"
    },
    {
      "line": 17,
      "name": "@Smoke_Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I hit api to fetch users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I search for \"Elwyn.Skiles\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I search post for the mentioned user",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I validate mandatory for the post title and body",
  "keyword": "Then "
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_hit_api_to_fetch_users()"
});
formatter.result({
  "duration": 49073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Elwyn.Skiles",
      "offset": 14
    }
  ],
  "location": "APIAutomationStepDefinition.i_search_for(String)"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_search_post_for_the_mentioned_user()"
});
formatter.result({
  "duration": 44499800,
  "status": "passed"
});
formatter.match({
  "location": "APIAutomationStepDefinition.i_validate_mandatory_for_the_post_title_and_body()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
});