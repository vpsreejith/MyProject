package com.pages;

import com.runner.BaseClass;

import org.junit.Assert;
import org.openqa.selenium.By;
	import org.openqa.selenium.support.ui.ExpectedConditions;
	import org.openqa.selenium.support.ui.WebDriverWait;


	public class PartnerStatusPage extends BaseClass{
	       

		public void verifyPartnerStatusPage()  {
			Assert.assertEquals("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/partner", driver.getCurrentUrl());

		}
		
		public void selectLivingWithPartner(String st) {
			if (st.equals("Yes"))
			{
				WebDriverWait wait =new WebDriverWait(driver,10);
				wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-yes"))).click();	
				driver.findElement(By.cssSelector("#next-button")).click();
				
			}
			else if (st.equals("No"))
			{
				WebDriverWait wait =new WebDriverWait(driver,10);
				wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("#label-no"))).click();	
				driver.findElement(By.cssSelector("#next-button")).click();
				
		}
			
			
		}
		public void verifyBenifitsPage() {
			Assert.assertEquals("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/claim-benefits-tax-credits", driver.getCurrentUrl());
		}
		
		
		
	    }


