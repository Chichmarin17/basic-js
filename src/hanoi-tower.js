const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNeeded = Math.pow(2, disksNumber) - 1;
  let secondsNeeded = Math.floor((3600 / turnsSpeed) * turnsNeeded);
  let result = {};
  result.turns = turnsNeeded;
  result.seconds = secondsNeeded;
  return result;
};
