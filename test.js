const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();
  try {
    await driver.get("https://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 10000);

    const title = await driver.getTitle();

    console.log("Title: ", title);

    console.log("Test Passed");
  } catch (error) {
    console.log("Test Failed", error);
  } finally {
    await driver.quit();
  }
})();
