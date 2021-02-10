const verbs = require('../../dictionary/verbs');

class RandomVerb {
  constructor(){
    this.randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  }

  newVerb() {
    const verb = this.randomVerb.replace(' ', '-');

    return verb;
  }
}

module.exports = RandomVerb;
