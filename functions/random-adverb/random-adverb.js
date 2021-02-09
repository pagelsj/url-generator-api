const adverbs = require('../../dictionary/adverbs');

class RandomAdverb {
  constructor(){
  }

  newAdverb() {
    return adverbs[Math.floor(Math.random() * adverbs.length)]
  }
}

module.exports = RandomAdverb;
