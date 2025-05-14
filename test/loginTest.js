//@ts-check
const { Builder, Browser } = require("selenium-webdriver");
const edge = require("selenium-webdriver/edge");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

(async function runTest() {
  const options = new edge.Options();
  options.addArguments("--headless=new");
  options.addArguments("--disable-gpu");
  options.addArguments("--window-size=1920,1080");
  const driver = await new Builder()
    .forBrowser(Browser.EDGE)
    .setEdgeOptions(options)
    .build();

  const loginPage = new LoginPage(driver);
  const inventoryPage = new InventoryPage(driver);

  try {
    await loginPage.open("https://www.saucedemo.com");
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLogin();

    await inventoryPage.waitForInventoryPage();

    if (inventoryPage) {
      console.log("Navigate to the inventory page after login");
    }

    console.log("Test Passed");

    await driver.sleep(3000);
  } catch (error) {
    console.log("Test Failed", error);
  } finally {
    await driver.quit();
  }
})();
