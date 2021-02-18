package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.When;
public class BenefitStepDefinition extends BaseClass {

	@When("^user selects \"([^\"]*)\" yes or no for Benefit and enter benefit details$")
	public void user_selects_yes_or_no_for_Benefit_and_enter_benefit_details(String arg1) throws Throwable {
		 benifitsPage .selectIsBenefitAvailable(arg1);
	}


}