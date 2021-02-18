package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class CountrySelectionStepdef extends BaseClass{
	
	
	@When("^user Selects \"([^\"]*)\" on Country selection page$")
	public void user_Selects_on_Country_selection_page(String arg1) throws Throwable {
		  countrySelectionpage.selectCountry(arg1);
	}


}



    