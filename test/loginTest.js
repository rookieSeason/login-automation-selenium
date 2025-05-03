//@ts-check
const { Builder, Browser } = require("selenium-webdriver");
const LoginPage = require("../pages/LoginPage");

(async function runTest() {
  const driver = await new Builder().forBrowser(Browser.EDGE).build();
  const loginPage = new LoginPage(driver);

  try {
    await loginPage.open("https://www.saucedemo.com");
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLogin();
    const inventoryPage = await loginPage.waitForInventoryPage();

    if (inventoryPage) {
      console.log("Successfully navigate after login");
    }

    console.log("Test Passed");

    await driver.sleep(5000);
  } catch (error) {
    console.log("Test Failed", error);
  } finally {
    await driver.quit();
  }
})();
