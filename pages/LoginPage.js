//@ts-check
const { By, until } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.inputUsername = By.id("user-name");
    this.inputPassword = By.id("password");
    this.loginButton = By.id("login-button");

    // Classname of the Swag Labs logo
    this.inventoryPage = By.className("app_logo");
  }

  async open(url) {
    await this.driver.get(url);
  }

  async enterUsername(username) {
    const field = await this.driver.wait(
      until.elementLocated(this.inputUsername),
      5000
    );
    await this.driver.wait(until.elementIsVisible(field), 1000);
    await field.sendKeys(username);
  }

  async enterPassword(password) {
    const field = await this.driver.wait(
      until.elementLocated(this.inputPassword),
      5000
    );
    await this.driver.wait(until.elementIsVisible(field), 1000);
    await field.sendKeys(password);
  }

  async clickLogin() {
    const button = await this.driver.wait(
      until.elementLocated(this.loginButton),
      5000
    );
    await this.driver.wait(until.elementIsVisible(button), 1000);
    await button.click();
  }
  async waitForInventoryPage() {
    await this.driver.wait(until.elementLocated(this.inventoryPage), 5000);
    return true;
  }
}

module.exports = LoginPage;
