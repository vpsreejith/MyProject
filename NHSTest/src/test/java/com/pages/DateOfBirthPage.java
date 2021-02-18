package com.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.runner.BaseClass;

public class DateOfBirthPage extends BaseClass {



	public void verifyDateOfBirthPage() {
		Assert.assertEquals("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/date-of-birth", driver.getCurrentUrl());
	}
    
	
		
		public void enterDateOfBirth(String dd,String mm, String yyyy)  {
			
			driver.findElement( By.cssSelector("#dob-day")).click();
			driver.findElement( By.cssSelector("#dob-day")).sendKeys(dd);
			
			driver.findElement( By.cssSelector("#dob-month")).click();
			driver.findElement( By.cssSelector("#dob-month")).sendKeys(mm);
			
			driver.findElement( By.cssSelector("#dob-year")).click();
			driver.findElement( By.cssSelector("#dob-year")).sendKeys(yyyy);
			
			driver.findElement(By.cssSelector("#next-button")).click();
		}
		
		
	   }
	
	
	

    
