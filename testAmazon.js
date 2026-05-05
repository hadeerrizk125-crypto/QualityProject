const { Builder, By, Key, until } = require("selenium-webdriver");
(async function testAmazon() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.amazon.com/");
    let searchBox = await driver.wait(
      until.elementLocated(By.id("twotabsearchtextbox")),
      20000
    );
    await searchBox.sendKeys("iphone", Key.ENTER);
    await driver.wait(
      until.elementLocated(By.css("div.s-main-slot div[data-component-type='s-search-result']")),
      20000
    );
    console.log("Amazon Test Passed - Results Loaded ✔");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await driver.sleep(60000);
    await driver.quit();
  }
})();
//node testAmazon.js