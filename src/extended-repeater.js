const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strArr = [];
  // return Object.values(options).join(" ");
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }
  for (i = 0; i < options.repeatTimes; i++) {
    strArr.push(str.toString());
  }
  let addArr = [];
  for (j = 0; j < options.additionRepeatTimes; j++) {
    addArr.push(options.addition.toString());
  }
  addArr = addArr.join(options.additionSeparator);
  let result = [];
  for (k = 0; k < strArr.length; k++) {
    result.push(`${strArr[k]}${addArr}`);
  }
  return result.join(options.separator);
};
  