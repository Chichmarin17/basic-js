const CustomError = require("../extensions/custom-error");
// let chain = [];

const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(this.chain[position - 1]) == 'undefined') {
      this.chain = [];
      throw "Error";
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let final = this.chain.join("~~");
    this.chain = [];
    return final;
  }
};
module.exports = chainMaker;
