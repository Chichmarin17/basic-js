const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, deep = 0, counter = 0) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        counter = this.calculateDepth(arr[i]);
        if (counter > deep) {
          deep = counter;
          counter = 0;
        }
      }
      return 1 + deep;
    } else return 0;
  }
};

