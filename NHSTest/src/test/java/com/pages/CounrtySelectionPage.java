package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.runner.BaseClass;

public class CounrtySelectionPage extends BaseClass {
public void selectCountry(String countryName) {
		
		WebDriverWait wait =new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-wales"))).click();	
		driver.findElement(By.cssSelector("#next-button")).click();
		
	}
	
	public void clickNextButton()  {
		driver.findElement(By.cssSelector("#next-button")).click();

		
	}
	
		  
     }