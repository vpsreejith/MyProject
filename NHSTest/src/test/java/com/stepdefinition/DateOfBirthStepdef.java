package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DateOfBirthStepdef extends BaseClass{
	@When("^user Enters Date Of birth \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Date of Birth Page$")
	public void user_Enters_Date_Of_birth_on_Date_of_Birth_Page(String arg1, String arg2, String arg3) throws Throwable {
	    
		dateOfBirthPage.enterDateOfBirth(arg1, arg2, arg3);
	}

	@Then("^It should display Living with partner option table$")
	public void it_should_display_Living_with_partner_option_table() throws Throwable {
	    
	}
	
	}


