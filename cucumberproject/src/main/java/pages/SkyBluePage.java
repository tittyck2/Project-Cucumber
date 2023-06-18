


package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SkyBluePage {
	
	WebDriver driver;
	
	public SkyBluePage (WebDriver driver) {
		
		this.driver = driver;
				
	}
		
		 static By sky = By.xpath("//button[text() = 'Set SkyBlue Background']");
	
		public  void clickonSkyBlueButton() {
			
			driver.findElement(sky).click();
			
		
		
	}

}
