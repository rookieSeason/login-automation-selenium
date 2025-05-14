//@ts-check
const { By, until } = require("selenium-webdriver");

module.exports = class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.inputUsername = By.id("user-name");
    this.inputPassword = By.id("password");
    this.loginButton = By.id("login-button");
  }

  async open(url) {
    await this.driver.get(url);
  }

  async enterUsername(username) {
    const field = await this.driver.wait(
      until.elementLocated(this.inputUsername)
    );
    await this.driver.wait(until.elementIsVisible(field), 1000);
    await field.sendKeys(username);
  }

  async enterPassword(password) {
    const field = await this.driver.wait(
      until.elementLocated(this.inputPassword)
    );
    await this.driver.wait(until.elementIsVisible(field), 1000);
    await field.sendKeys(password);
  }

  async clickLogin() {
    const button = await this.driver.wait(
      until.elementLocated(this.loginButton)
    );
    await this.driver.wait(until.elementIsVisible(button), 1000);
    await button.click();
  }
};
