const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // return arr.join("");
  // if (arr.length == 0) return [];
  let newArr = [];
  let checker = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (Number.isInteger(arr[i + 1])) {
          checker += 1;
      } else continue;
    } else if (arr[i] == '--discard-prev') {
      if (newArr.length > 0) {
        newArr.pop();
      } else continue;
    } else if (arr[i] == '--double-next') {
      if (Number.isInteger(arr[i + 1])) {
          newArr.push(arr[i + 1]);
      } else continue;
    } else if (arr[i] == '--double-prev') {
      if ( (newArr.length > 0) && (newArr[newArr.length - 1] == arr[i - 1]) ) {
        newArr.push(newArr[newArr.length - 1]);
      } else continue;
    } else if (checker > 0) {
        checker = 0;
    } else newArr.push(arr[i]);
  }
  return newArr;
};
