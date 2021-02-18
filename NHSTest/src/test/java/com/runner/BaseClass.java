package com.runner;

import org.openqa.selenium.WebDriver;

import com.pages.BenifitsPage;
import com.pages.CounrtySelectionPage;
import com.pages.DateOfBirthPage;
import com.pages.HealthDetailsepage;
import com.pages.HomePage;
import com.pages.PartnerStatusPage;
import com.pages.NHSHelpResultPage;
public class BaseClass {

	public static WebDriver driver ;
	public static HomePage homepage =new HomePage() ;
    public static  CounrtySelectionPage countrySelectionpage=new  CounrtySelectionPage();
    public static DateOfBirthPage dateOfBirthPage = new DateOfBirthPage() ;
    public static PartnerStatusPage partnerstatuspage = new PartnerStatusPage() ;
    public static BenifitsPage benifitsPage = new BenifitsPage() ;
    public static HealthDetailsepage healthDetailsePage = new   HealthDetailsepage ();
    public static NHSHelpResultPage nhsHelpresultPage = new NHSHelpResultPage();
   }
