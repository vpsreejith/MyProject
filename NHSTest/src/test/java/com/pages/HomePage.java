package com.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.runner.BaseClass;


	
	public class HomePage extends BaseClass {
	
		
		public void verifyHomepage()  {

			System.setProperty("webdriver.chrome.driver", "chromedriver.exe" );  		
			driver = new ChromeDriver();
			driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");	
			WebDriverWait wait =new WebDriverWait(driver,10);
			wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button#nhsuk-cookie-banner__link_accept_analytics.button"))).click();		

			
			
				

		}
		public void verifyStartbutton()	{
			 WebDriverWait  wait =new WebDriverWait(driver,10);
			 wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".button.button-get-started"))).click();
	  }
		public void verifyCounrtySelectionpage() {
			Assert.assertEquals("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/where-you-live", driver.getCurrentUrl());
		}
	    }
