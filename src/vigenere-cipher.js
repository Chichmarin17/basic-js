const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyLengthOfMessage = [];
    let countInKey = 0;
    const charCodes = [65, 90];
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
    message = message.split("");
    let result = message.map(function (item, index, keyLengthOfMessage) {
      return (item.charCodeAt() + keyLengthOfMessage[index].charCodeAt()) % 65 + 65;
    })
    
  }    
  decrypt() {
    
  }
}

module.exports = VigenereCipheringMachine;
