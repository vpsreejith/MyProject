package com.runner;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions( features = "src/test/resources/Features",
			glue = { "com.stepdefinition" },
			plugin = { "html:target/cucumber-html-report", "json:target/cucumber.json" },
					tags = "@test"
)
				

				

public class CucumberRunner {

}

