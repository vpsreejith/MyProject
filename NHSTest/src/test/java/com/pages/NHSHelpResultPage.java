package com.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.runner.BaseClass;


public class NHSHelpResultPage extends BaseClass {

	
	public void verifyNHSHelpResultPage() {
		Assert.assertEquals("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/result", driver.getCurrentUrl());
	}
	
}
