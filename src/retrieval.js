const dataset = require("../data/dataset.json");

function findBestMatch(userInput) {
  const input = userInput.toLowerCase();

  let bestMatch = null;

  for (let item of dataset) {
    const question = item.question.toLowerCase();
    const intent = item.intent.toLowerCase();

    if (input.includes(intent) || input.includes(question)) {
      bestMatch = item;
      break;
    }
  }

  return bestMatch;
}

module.exports = { findBestMatch };