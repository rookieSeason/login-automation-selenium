//@ts-check
const { By, until } = require("selenium-webdriver");

module.exports = class InventoryPage {
  constructor(driver) {
    this.driver = driver;
    this.pageLogo = By.className("app_logo");
  }
  async waitForInventoryPage() {
    await this.driver.wait(until.elementLocated(this.pageLogo), 1000);
    return true;
  }
};
