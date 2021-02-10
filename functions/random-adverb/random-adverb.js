const adverbs = require('../../dictionary/adverbs');

class RandomAdverb {
  constructor(){
    this.randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  }

  newAdverb() {
    const adverb = this.randomAdverb.replace(' ', '-');

    return adverb;
  }
}

module.exports = RandomAdverb;
