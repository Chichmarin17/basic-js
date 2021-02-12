const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.map(item => {
      if (Array.isArray(item)) {
        return depth = 1 + this.calculateDepth(arr);
      }
    });
    return depth;
  }
};

