const adverbs = require('../../dictionary/adverbs');

class RandomAdverb {

  newAdverb() {
    const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    const adverb = randomAdverb.replace(' ', '-');

    return adverb;
  }
}

module.exports = RandomAdverb;
