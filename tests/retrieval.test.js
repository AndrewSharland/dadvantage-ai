const { findBestMatch } = require("../src/retrieval");

test("should return a matching result for workout", () => {
  const result = findBestMatch("quick workout");
  expect(result).not.toBeNull();
  expect(result.category).toBe("fitness");
});