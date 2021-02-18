$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nhshelpchecker.feature");
formatter.feature({
  "line": 1,
  "name": "NHS Help Checker Funcationality",
  "description": "",
  "id": "nhs-help-checker-funcationality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify Select Living with Partner options",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is in Partner status page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user select \u003cpartnerStatus\u003e for living with partner option",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects \u003cbenefit\u003e yes or no for Benefit and enter benefit details",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user answers the health questions",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "it should display NHS Help Result page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;",
  "rows": [
    {
      "cells": [
        "partnerStatus",
        "benefit"
      ],
      "line": 17,
      "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;1"
    },
    {
      "cells": [
        "\"Yes\"",
        "\"Yes\""
      ],
      "line": 18,
      "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;2"
    },
    {
      "cells": [
        "\"Yes\"",
        "\"No\""
      ],
      "line": 19,
      "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;3"
    },
    {
      "cells": [
        "\"No\"",
        "\"Yes\""
      ],
      "line": 20,
      "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;4"
    },
    {
      "cells": [
        "\"No\"",
        "\"No\""
      ],
      "line": 21,
      "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is in NHS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on next button of the webpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Selects \"wales \" on Country selection page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Enters Date Of birth \"12\" \"08\" \"1996\" on Date of Birth Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "It should display Living with partner option table",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefinition.user_is_in_NHS_home_page()"
});
formatter.result({
  "duration": 6991776700,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 607973500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wales ",
      "offset": 14
    }
  ],
  "location": "CountrySelectionStepdef.user_Selects_on_Country_selection_page(String)"
});
formatter.result({
  "duration": 527197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 27
    },
    {
      "val": "08",
      "offset": 32
    },
    {
      "val": "1996",
      "offset": 37
    }
  ],
  "location": "DateOfBirthStepdef.user_Enters_Date_Of_birth_on_Date_of_Birth_Page(String,String,String)"
});
formatter.result({
  "duration": 876416000,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 46300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Select Living with Partner options",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is in Partner status page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user select \"Yes\" for living with partner option",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects \"Yes\" yes or no for Benefit and enter benefit details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user answers the health questions",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "it should display NHS Help Result page",
  "keyword": "Then "
});
formatter.match({
  "location": "PartnerStatusStepdef.user_is_in_Partner_status_page()"
});
formatter.result({
  "duration": 25115500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 13
    }
  ],
  "location": "PartnerStatusStepdef.user_select_for_living_with_partner_option(String)"
});
formatter.result({
  "duration": 429250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 14
    }
  ],
  "location": "BenefitStepDefinition.user_selects_yes_or_no_for_Benefit_and_enter_benefit_details(String)"
});
formatter.result({
  "duration": 1968524900,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 2727744700,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 8609500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is in NHS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on next button of the webpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Selects \"wales \" on Country selection page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Enters Date Of birth \"12\" \"08\" \"1996\" on Date of Birth Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "It should display Living with partner option table",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefinition.user_is_in_NHS_home_page()"
});
formatter.result({
  "duration": 6846793500,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 551482900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wales ",
      "offset": 14
    }
  ],
  "location": "CountrySelectionStepdef.user_Selects_on_Country_selection_page(String)"
});
formatter.result({
  "duration": 594157400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 27
    },
    {
      "val": "08",
      "offset": 32
    },
    {
      "val": "1996",
      "offset": 37
    }
  ],
  "location": "DateOfBirthStepdef.user_Enters_Date_Of_birth_on_Date_of_Birth_Page(String,String,String)"
});
formatter.result({
  "duration": 1009809300,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Select Living with Partner options",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is in Partner status page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user select \"Yes\" for living with partner option",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects \"No\" yes or no for Benefit and enter benefit details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user answers the health questions",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "it should display NHS Help Result page",
  "keyword": "Then "
});
formatter.match({
  "location": "PartnerStatusStepdef.user_is_in_Partner_status_page()"
});
formatter.result({
  "duration": 16628300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 13
    }
  ],
  "location": "PartnerStatusStepdef.user_select_for_living_with_partner_option(String)"
});
formatter.result({
  "duration": 486689400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 14
    }
  ],
  "location": "BenefitStepDefinition.user_selects_yes_or_no_for_Benefit_and_enter_benefit_details(String)"
});
formatter.result({
  "duration": 557059200,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 3520229000,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 55333600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is in NHS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on next button of the webpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Selects \"wales \" on Country selection page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Enters Date Of birth \"12\" \"08\" \"1996\" on Date of Birth Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "It should display Living with partner option table",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefinition.user_is_in_NHS_home_page()"
});
formatter.result({
  "duration": 5638199100,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 691105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wales ",
      "offset": 14
    }
  ],
  "location": "CountrySelectionStepdef.user_Selects_on_Country_selection_page(String)"
});
formatter.result({
  "duration": 580175300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 27
    },
    {
      "val": "08",
      "offset": 32
    },
    {
      "val": "1996",
      "offset": 37
    }
  ],
  "location": "DateOfBirthStepdef.user_Enters_Date_Of_birth_on_Date_of_Birth_Page(String,String,String)"
});
formatter.result({
  "duration": 909117600,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Select Living with Partner options",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is in Partner status page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user select \"No\" for living with partner option",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects \"Yes\" yes or no for Benefit and enter benefit details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user answers the health questions",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "it should display NHS Help Result page",
  "keyword": "Then "
});
formatter.match({
  "location": "PartnerStatusStepdef.user_is_in_Partner_status_page()"
});
formatter.result({
  "duration": 19109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 13
    }
  ],
  "location": "PartnerStatusStepdef.user_select_for_living_with_partner_option(String)"
});
formatter.result({
  "duration": 493568400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 14
    }
  ],
  "location": "BenefitStepDefinition.user_selects_yes_or_no_for_Benefit_and_enter_benefit_details(String)"
});
formatter.result({
  "duration": 2107397400,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 3332922700,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 24024700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user is in NHS home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on next button of the webpage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Selects \"wales \" on Country selection page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Enters Date Of birth \"12\" \"08\" \"1996\" on Date of Birth Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "It should display Living with partner option table",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefinition.user_is_in_NHS_home_page()"
});
formatter.result({
  "duration": 5797659300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 577405000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wales ",
      "offset": 14
    }
  ],
  "location": "CountrySelectionStepdef.user_Selects_on_Country_selection_page(String)"
});
formatter.result({
  "duration": 621489300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 27
    },
    {
      "val": "08",
      "offset": 32
    },
    {
      "val": "1996",
      "offset": 37
    }
  ],
  "location": "DateOfBirthStepdef.user_Enters_Date_Of_birth_on_Date_of_Birth_Page(String,String,String)"
});
formatter.result({
  "duration": 1065733100,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Select Living with Partner options",
  "description": "",
  "id": "nhs-help-checker-funcationality;verify-select-living-with-partner-options;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is in Partner status page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user select \"No\" for living with partner option",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user selects \"No\" yes or no for Benefit and enter benefit details",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user answers the health questions",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "it should display NHS Help Result page",
  "keyword": "Then "
});
formatter.match({
  "location": "PartnerStatusStepdef.user_is_in_Partner_status_page()"
});
formatter.result({
  "duration": 21454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 13
    }
  ],
  "location": "PartnerStatusStepdef.user_select_for_living_with_partner_option(String)"
});
formatter.result({
  "duration": 534640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 14
    }
  ],
  "location": "BenefitStepDefinition.user_selects_yes_or_no_for_Benefit_and_enter_benefit_details(String)"
});
formatter.result({
  "duration": 583884500,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 3211485400,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 16748000,
  "status": "passed"
});
});