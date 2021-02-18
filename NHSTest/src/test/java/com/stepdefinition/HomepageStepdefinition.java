package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomepageStepdefinition extends BaseClass {

	
	@Given("^user is in NHS home page$")
	public void user_is_in_NHS_home_page() throws Throwable {
		homepage.verifyHomepage();
	}

	@When("^user click on next button of the webpage$")
	public void user_click_on_next_button_of_the_webpage() throws Throwable {
	    homepage.verifyStartbutton();
	}


     }
