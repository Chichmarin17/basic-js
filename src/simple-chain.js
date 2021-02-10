const CustomError = require("../extensions/custom-error");
let chain = [];

const chainMaker = {
  chain: chain,
  getLength() {
    return chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chain.join("~~");
    return this;
  }
};
module.exports = chainMaker;
