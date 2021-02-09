const verbs = require('../../dictionary/verbs');

class RandomVerb {
  constructor(){
  }

  newVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)]
  }
}

module.exports = RandomVerb;
