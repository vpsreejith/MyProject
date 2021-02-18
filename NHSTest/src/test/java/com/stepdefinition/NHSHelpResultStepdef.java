package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.Then;
public class NHSHelpResultStepdef extends BaseClass {


	@Then("^it should display NHS Help Result page$")
	public void it_should_display_NHS_Help_Result_page() throws Throwable {
		nhsHelpresultPage.verifyNHSHelpResultPage();
	}
	
}
