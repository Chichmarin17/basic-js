const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strArr = [];
  for (i = 0; i < options.repeatTimes; i++) {
    strArr.push(str);
  }
  let addArr = [];
  for (j = 0; j < options.additionRepeatTimes; j++) {
    addArr.push(options.addition);
  }
  addArr = addArr.join(options.additionSeparator);
  let result = [];
  for (k = 0; k < strArr.length; k++) {
    result.push(`${strArr[k]}${addArr}`);
  }
  return result.join(options.separator);
};
  