package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.runner.BaseClass;

public class BenifitsPage extends BaseClass {
	public void selectIsBenefitAvailable(String st) {
		if (st.equals("Yes"))
		{
			WebDriverWait wait =new WebDriverWait(driver,10);
			wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-yes"))).click();	
			driver.findElement(By.cssSelector("#next-button")).click();
			answerBenefitQuestions();
			
		}
		else if (st.equals("No"))
		{
			WebDriverWait wait =new WebDriverWait(driver,10);
			wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();	
			driver.findElement(By.cssSelector("#next-button")).click();
			
		}

       }
	
     public void answerBenefitQuestions() {
    	 WebDriverWait wait =new WebDriverWait(driver,10);
	 	 wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("label[for='yes-universal']"))).click();    	 
    	 driver.findElement(By.cssSelector("#next-button")).click();
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-yes"))).click(); 
		 driver.findElement(By.cssSelector("#next-button")).click();
		 wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click(); 
		 driver.findElement(By.cssSelector("#next-button")).click();
			 		 	
     }
    
    }




