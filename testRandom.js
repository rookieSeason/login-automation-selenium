//@ts-check
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const edge = require("selenium-webdriver/edge");

(async function testRandom() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();

  try {
    /** Go to website */
    await driver.get("https://www.saucedemo.com");
    /** Find the input field by id "user-name" and input the username*/
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    /** Find the input field by id "password" and input the password */
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    /** Clicking the login button */
    await driver.findElement(By.id("login-button")).click();

    // /** After login it will load and redirect to inventory page */
    await driver.wait(until.urlContains("/inventory.html"), 5000);

    // Get current URL
    const currentUrl = await driver.getCurrentUrl();

    if (currentUrl.includes("/inventory.html")) {
      console.log(currentUrl);
      console.log("Login successfully redirect to another page");
    } else {
      console.log("Login failed or not redirect to the page");
    }

    console.log("Test Passed");

    await driver.sleep(5000);
  } catch (error) {
    console.log("Test Failed ", error);
  } finally {
    await driver.quit();
  }
})();
