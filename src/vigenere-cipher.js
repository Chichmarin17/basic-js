const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    let keyLengthOfMessage = [];
    let countInKey = 0;
    const charCodes = [65, 122];
    for (i = 0; i < message.length; i++) {
      if (key[countInKey] == undefined) {
        countInKey = 0;
      }
      if (message[i].charCodeAt() < charCodes[0] || message[i].charCodeAt() > charCodes[1]) {
        keyLengthOfMessage.push(message[i]);
      } else {
        keyLengthOfMessage.push(key[countInKey]);
        countInKey++;
      }
    }
    return keyLengthOfMessage;
  }    
  decrypt() {
    
  }
}

module.exports = VigenereCipheringMachine;
