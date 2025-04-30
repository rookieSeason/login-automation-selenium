//@ts-check
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function fbSearch() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build();

  try {
    // Go to goole
    await driver.get("https://www.google.com/ncr");
    // Find the searchbox by name attribute and send a word facebook
    await driver.findElement(By.name("q")).sendKeys("facebook", Key.RETURN);
    // Wait for 15 seconds until facebook title appears
    await driver.wait(until.titleIs("facebook"), 15000);
    // Get the title
    const title = await driver.getTitle();

    console.log("Title: ", title);

    console.log("Test Passed");
  } catch (error) {
    console.log("Test Failed", error);
  } finally {
    await driver.quit();
  }
})();
