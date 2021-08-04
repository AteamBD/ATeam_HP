$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePageHp.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Verification Function",
  "description": "This feature deals with verification functionalities in Homepage",
  "id": "home-page-verification-function",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Gaming Pcs Page",
  "description": "",
  "id": "home-page-verification-function;verify-gaming-pcs-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Mouse Over to Shop",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Gaming Pcs",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify Gaming Pcs Page Display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 13285609100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.mouse_Over_to_Shop()"
});
formatter.result({
  "duration": 11696225800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_on_Gaming_Pcs()"
});
formatter.result({
  "duration": 5099998300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Gaming_Pcs_Page_Display()"
});
formatter.result({
  "duration": 637396300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Search Result Display",
  "description": "",
  "id": "home-page-verification-function;verify-search-result-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Enter HP Chromebook In Search Field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on Search Link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify Search Result Display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 25148343400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.enter_HP_Chromebook_In_Search_Field()"
});
formatter.result({
  "duration": 1345380900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_on_Search_Link()"
});
formatter.result({
  "duration": 4345576500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Search_Result_Display()"
});
formatter.result({
  "duration": 461362500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Hp Envy Printers Page Display",
  "description": "",
  "id": "home-page-verification-function;verify-hp-envy-printers-page-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Click On Shop Under Family Printer Option",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Verify Hp Envy Printers Page Display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 23632180800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.click_On_Shop_Under_Family_Printer_Option()"
});
formatter.result({
  "duration": 9363955300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.verify_Hp_Envy_Printers_Page_Display()"
});
formatter.result({
  "duration": 1827270900,
  "status": "passed"
});
formatter.uri("LoginPageHp.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "This feature deals with the Login Functionalities",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Can Login",
  "description": "",
  "id": "login;verify-user-can-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open Application \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Mouse Over to Shop",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click On HP.com Store",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Sign in/Register Main link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Sign In Link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter Username and Click Next Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Password and Click On SIGN IN Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify User Can Login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 18
    }
  ],
  "location": "StepDefHomePageHp.open_Application(String)"
});
formatter.result({
  "duration": 23875365900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefHomePageHp.mouse_Over_to_Shop()"
});
formatter.result({
  "duration": 468721100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_On_HP_com_Store()"
});
formatter.result({
  "duration": 9987961500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_on_Sign_in_Register_Main_link()"
});
formatter.result({
  "duration": 1724273000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.click_on_Sign_In_Link()"
});
formatter.result({
  "duration": 2715195500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.enter_Username_and_Click_Next_Link()"
});
formatter.result({
  "duration": 493665600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.enter_Password_and_Click_On_SIGN_IN_Link()"
});
formatter.result({
  "duration": 432501700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLoginPageHp.verify_User_Can_Login()"
});
formatter.result({
  "duration": 13234312800,
  "status": "passed"
});
});