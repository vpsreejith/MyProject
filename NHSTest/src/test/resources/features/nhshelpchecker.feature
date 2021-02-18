 Feature: NHS Help Checker Funcationality
Background:
Given user is in NHS home page 
When user click on next button of the webpage 
And user Selects "wales " on Country selection page
And user Enters Date Of birth "12" "08" "1996" on Date of Birth Page
Then It should display Living with partner option table

@test
Scenario Outline: Verify Select Living with Partner options
Given user is in Partner status page
When user select <partnerStatus> for living with partner option 
And user selects <benefit> yes or no for Benefit and enter benefit details
And user answers the health questions
Then it should display NHS Help Result page
Examples:
 | partnerStatus  | benefit |
 |   "Yes"  | "Yes" |
 |   "Yes"  | "No"  |
 |  "No"    |  "Yes" |
 |  "No"    |  "No"  |

