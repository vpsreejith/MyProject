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
  "duration": 7461857300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 681800100,
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
  "duration": 616878700,
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
  "duration": 939629200,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 42200,
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
  "duration": 24896400,
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
  "duration": 557571700,
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
  "duration": 2265096300,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 3734790300,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 27124500,
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
  "duration": 7426839600,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 622315200,
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
  "duration": 1270161100,
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
  "duration": 1216196100,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 42100,
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
  "duration": 26973000,
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
  "duration": 693627500,
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
  "duration": 760534900,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 4167065300,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 21307800,
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
  "duration": 6348659900,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "duration": 749119400,
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
  "duration": 1063193200,
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
  "duration": 1690772000,
  "status": "passed"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "duration": 40600,
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
  "duration": 22347300,
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
  "duration": 579599700,
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
  "duration": 2534661200,
  "status": "passed"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "duration": 3430009400,
  "status": "passed"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "duration": 29657200,
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
  "duration": 17503791300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.cssSelector: button#nhsuk-cookie-banner__link_accept_analytics.button (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat com.pages.HomePage.verifyHomepage(HomePage.java:22)\r\n\tat com.stepdefinition.HomepageStepdefinition.user_is_in_NHS_home_page(HomepageStepdefinition.java:13)\r\n\tat ✽.Given user is in NHS home page(nhshelpchecker.feature:3)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027E0352983\u0027, ip: \u002710.255.70.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\VANNAD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60978}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: faf78d86266d2647d65c0cba55570bf3\n*** Element info: {Using\u003dcss selector, value\u003dbutton#nhsuk-cookie-banner__link_accept_analytics.button}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:346)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat com.pages.HomePage.verifyHomepage(HomePage.java:22)\r\n\tat com.stepdefinition.HomepageStepdefinition.user_is_in_NHS_home_page(HomepageStepdefinition.java:13)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:379)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:340)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:413)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomepageStepdefinition.user_click_on_next_button_of_the_webpage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "DateOfBirthStepdef.it_should_display_Living_with_partner_option_table()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "HealthDetailseStepdef.user_answers_the_health_questions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NHSHelpResultStepdef.it_should_display_NHS_Help_Result_page()"
});
formatter.result({
  "status": "skipped"
});
});