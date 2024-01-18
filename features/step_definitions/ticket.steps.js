const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
  });
  
  After(async function () {
    if (this.browser) {
      await this.browser.close();
    }
  });
  
  Given("user is on {string} page", async function (string) {
    return await this.page.goto(`http://qamid.tmweb.ru${string}`, {
      setTimeout: 60000,
    });
  });
  
  When("user select date tomorrow", async function () {
    return await clickElement(this.page, "[data-time-stamp = '1705611600']");
    });

  When("user select movie first", async function () {
    return await clickElement(this.page, "[data-seance-id = '192']");
  });

  When("user select movie second", async function () {
    return await clickElement(this.page, "[data-seance-id = '190']");
  });

  When("user choose a standart seat {string}", async function (string) {
    return await clickElement(this.page,  "[class='buying-scheme__chair buying-scheme__chair_standart']");
  });

  When("user choose a VIP seat {string}", async function (string) {
    return await clickElement(this.page, "[class = 'buying-scheme__chair buying-scheme__chair_vip']");
  });

  When("user choose a disable seat {string}", async function (string) {
    return await clickElement(this.page, "[class='buying-scheme__chair buying-scheme__chair_disabled']");
  });

  When("user orders ticket on button {string}", async function (string) {
    return await clickElement(this.page, "[class='acceptin-button']");
  });

  
  Then("user sees button {string}", async function (string) {
    const actual = await getText(this.page, "button");
    const expected = await string;
    expect(actual).contains(expected);
  });

  Then("user sees inactive button {string}", async function (string) {
    const actual = await getText(this.page, "button");
    const expected = await string;
    expect(actual).contains(expected);
  });

 