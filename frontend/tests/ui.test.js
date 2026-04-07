const { test, expect } = require("@playwright/test");

test("user can ask a question", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.fill("input", "quick workout");
  await page.click("button");

  await page.waitForSelector("text=Answer");

  const content = await page.textContent("body");
  expect(content.toLowerCase()).toContain("workout");
});