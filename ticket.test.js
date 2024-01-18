const { clickElement, getText } = require("./lib/commands.js");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Order ticket", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, "[data-time-stamp = '1705611600']");
  });

  test("Order a standart ticket", async () => {
    await clickElement(page, "[data-seance-id = '192']");
    await clickElement(page, "[class = 'buying-scheme__chair buying-scheme__chair_standart']");
    await clickElement(page, "button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Order a VIP ticket", async () => {
    await clickElement(page, "[data-seance-id = '190']");
    await clickElement(page, "[class = 'buying-scheme__chair buying-scheme__chair_vip']")
    await clickElement(page, "button");
    const actual = await getText(page, "h2.ticket__check-title");
    expect(actual).toContain("Вы выбрали билеты:");
  });

  test("Disable order ticket", async () => {
    await clickElement(page, "[data-seance-id = '192']");
    await clickElement(page, "[class='buying-scheme__chair buying-scheme__chair_disabled']");
    await clickElement(page, "button")
    const isDisabled = await page.$eval("button", (button) => button.disabled);
    expect(isDisabled).toEqual(true);
  });


});