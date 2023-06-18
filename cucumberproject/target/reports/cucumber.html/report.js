$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/backgroundtoblue.feature");
formatter.feature({
  "name": "Changing Background Color to Sky Blue",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BlueFeature"
    }
  ]
});
formatter.scenario({
  "name": "Clicking On Set Sky Blue Background button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BlueFeature"
    }
  ]
});
formatter.step({
  "name": "Set SkyBlue Background Button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.set_SkyBlue_Background_Button_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click On the button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.i_Click_On_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Background Color Will Change to Sky Blue",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.the_Background_Color_Will_Change_to_Sky_Blue()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/backgroundtowhite.feature");
formatter.feature({
  "name": "Changing Background Color to Sky White",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WhiteFeature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Clicking On Set Sky Blue Background button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WhiteFeature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Set SkyWhite Background Button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.set_SkyWhite_Background_Button_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click On the sky white button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.i_Click_On_the_sky_white_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Background Color Will Change to Sky White",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.the_Background_Color_Will_Change_to_Sky_White()"
});
formatter.result({
  "status": "passed"
});
});