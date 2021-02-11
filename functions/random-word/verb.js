const verbs = require('../../dictionary/verbs');

class RandomVerb {

  newVerb() {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const verb = randomVerb.replace(' ', '-');

    return verb;
  }
}

module.exports = RandomVerb;
