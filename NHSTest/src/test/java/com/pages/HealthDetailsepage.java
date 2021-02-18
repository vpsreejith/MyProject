package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.runner.BaseClass;

public class HealthDetailsepage extends BaseClass{
	public void verifyanswerHealthQuestions() {
	//driver.findElement(By.cssSelector("label[for='radio-no']")).click();
		
		 WebDriverWait wait =new WebDriverWait(driver,10);
	 	 wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();    	 
		driver.findElement(By.cssSelector("#next-button")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();  
		driver.findElement(By.cssSelector("#next-button")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();  
		driver.findElement(By.cssSelector("#next-button")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();  
		driver.findElement(By.cssSelector("#next-button")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();  
		driver.findElement(By.cssSelector("#next-button")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();  
		driver.findElement(By.cssSelector("#next-button")).click();
	}

    }
