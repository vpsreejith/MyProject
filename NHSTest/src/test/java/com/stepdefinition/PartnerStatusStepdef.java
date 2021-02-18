package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PartnerStatusStepdef extends BaseClass {
	
		@Given("^user is in Partner status page$")
		public void user_is_in_Partner_status_page() throws Throwable {
			partnerstatuspage.verifyPartnerStatusPage();
		}

		
		@When("^user select \"([^\"]*)\" for living with partner option$")
		public void user_select_for_living_with_partner_option(String arg1) throws Throwable {
			partnerstatuspage.selectLivingWithPartner(arg1);
		}

	
       }
