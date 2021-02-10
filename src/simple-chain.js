const CustomError = require("../extensions/custom-error");

const chainMaker = {
  let chain = [];
  getLength() {
    return chain.length;
  },
  addLink(value) {
    return chain.push(`( ${value} )`);
  },
  removeLink(position) {
    chain.splice(position - 1, 1);
  },
  reverseChain() {
    return chain = chain.reverse();
  },
  finishChain() {
    return chain.join("~~");
};

module.exports = chainMaker;
