const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(parseInt(sampleActivity)) || +sampleActivity < 0 || typeof(sampleActivity) != 'string' ||
  sampleActivity.length == 0) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let logariphm = Math.log(MODERN_ACTIVITY / sampleActivity);
  let result = logariphm / k;
  if (result < 0 || !isFinite(result)) return false;
  return Math.ceil(result);
};
