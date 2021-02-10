const RandomVerb = require('../random-verb/random-verb');
const RandomAdverb = require('../random-adverb/random-adverb');
const RandomAdjective = require('../random-adjective/random-adjective');
const RandomAnimal = require('../random-animal/random-animal');

module.exports = class UrlBuilder {

  constructor() {
    this.randomVerb = new RandomVerb();
    this.randomAdverb = new RandomAdverb();
    this.randomAdjective = new RandomAdjective();
    this.randomAnimal = new RandomAnimal();
  }

  newUrl() {
    let verb = this.randomVerb.newVerb();
    let adverb = this.randomAdverb.newAdverb();
    let adjective = this.randomAdjective.newAdjective();
    let animal = this.randomAnimal.newAnimal();

    return `${adverb}-${verb}-${animal}.com`;
  }
}
