const puppeteer = require('puppeteer');
exports.handler = function(request, response) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://github.com');
  const screenshot = await page.screenshot();
  response.send(screenshot);

  browser.close();
}