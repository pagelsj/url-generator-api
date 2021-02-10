const RandomVerb = require('../random-verb/random-verb');
const RandomAdverb = require('../random-adverb/random-adverb');
const RandomAdjective = require('../random-adjective/random-adjective');
const RandomAnimal = require('../random-animal/random-animal');

class UrlBuilder {
  constructor() {
    const randomVerb = new RandomVerb();
    this.verb = randomVerb.newVerb();

    const randomAdverb = new RandomAdverb();
    this.adverb = randomAdverb.newAdverb();

    const randomAdjective = new RandomAdjective();
    this.adjective = randomAdjective.newAdjective();

    const randomAnimal = new RandomAnimal();
    this.animal = randomAnimal.newAnimal();
  }

  newUrl() {
    return `${this.adverb}-${this.verb}-${this.animal}.com`;
  }
}

module.exports = UrlBuilder;
