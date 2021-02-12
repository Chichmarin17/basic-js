const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
  }
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
    let result = [];
    for (j = 0; j < message.length; j++) {
      if (message[j].charCodeAt() < charCodes[0] || message[j].charCodeAt() > charCodes[1]) {
        result.push(message[j]);
      } else {
        result.push(String.fromCharCode( (message[j].charCodeAt() + keyLengthOfMessage[j].charCodeAt()) % 26 + 65))
      }
    }
    if (!this.mode) result = result.reverse();
    return result.join("");   
  }    
  decrypt(message, key) {
    key = key.toUpperCase();
    message = message.split("");
    const charCodes = [65, 90];
    let keyLengthOfMessage = [];
    let countInKey = 0;
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
    let result = [];
    for (j = 0; j < message.length; j++) {
      if (message[j].charCodeAt() < charCodes[0] || message[j].charCodeAt() > charCodes[1]) {
        result.push(message[j]);
      } else {
        result.push(String.fromCharCode( (message[j].charCodeAt() + 26 - keyLengthOfMessage[j].charCodeAt()) % 26 + 65))
      }
    }
    if (!this.mode) result = result.reverse();
    return result.join("");
  }
}

module.exports = VigenereCipheringMachine;
