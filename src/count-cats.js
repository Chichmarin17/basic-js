const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  for (i = 0; i < matrix.length; i++) {
    if (matrix[i].includes('^^')) {
      counter++;
    } 
  }
  return counter;
};
