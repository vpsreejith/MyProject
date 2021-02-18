package com.stepdefinition;

import com.runner.BaseClass;

import cucumber.api.java.en.When;

public class HealthDetailseStepdef extends BaseClass {
	@When("^user answers the health questions$")
	public void user_answers_the_health_questions() throws Throwable {
		healthDetailsePage.verifyanswerHealthQuestions();
	   
	}


    }
