package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.SkyBluePage;
import pages.SkyWhitePage;
import pages.TestBasePage;

public class StepDefinition extends TestBasePage {
	SkyBluePage skybluepage;
	SkyWhitePage skywhitepage;

	@Given("Set SkyBlue Background Button exists")
	public void set_SkyBlue_Background_Button_exists() {

		init();
		driver.get("https://techfios.com/test/108/");

	}

	@When("I Click On the button")

	public void i_Click_On_the_button() {

		skybluepage = PageFactory.initElements(driver, SkyBluePage.class);

		skybluepage.clickonSkyBlueButton();

	}

	@Then("The Background Color Will Change to Sky Blue")

	public void the_Background_Color_Will_Change_to_Sky_Blue() {

	}

	@Given("Set SkyWhite Background Button exists")
	public void set_SkyWhite_Background_Button_exists() {

		init();
		driver.get("https://techfios.com/test/108/");
	}

	@When("I Click On the sky white button")
	public void i_Click_On_the_sky_white_button() {
		skywhitepage = PageFactory.initElements(driver, SkyWhitePage.class);
		skywhitepage.clickonSkyWhiteButton();

	}

	@Then("The Background Color Will Change to Sky White")
	public void the_Background_Color_Will_Change_to_Sky_White() {

	}
}
