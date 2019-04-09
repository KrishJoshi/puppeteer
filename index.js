// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.puppeteerscreenshot = require("./puppeteer/screenshot.js").handler;
exports.puppeteerHelloWorld = require("./puppeteer/HelloWorld.js").handler;