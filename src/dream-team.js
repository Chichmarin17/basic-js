const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if (!Array.isArray(members)) return false;
  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string') continue;
    dreamTeam.push(members[i].trim().toUpperCase()[0]);
  }
  dreamTeam = dreamTeam.sort();
  return dreamTeam.join("");
};
