const Verb = require('./verb');
const Adverb = require('./adverb');
const Adjective = require('./adjective');
const Animal = require('./animal');

module.exports = class RandomWord {

  constructor() {
    this.verb = new Verb();
    this.adverb = new Adverb();
    this.adjective = new Adjective();
    this.animal = new Animal();
  }

  newWord(type) {
    switch(type) {
      case "verb":
        return this.verb.newVerb();
      break;

      case "adverb":
        return this.adverb.newAdverb();
      break;

      case "animal":
        return this.animal.newAnimal();
      break;

      default:
        return this.adjective.newAdjective();
      break;
    }
  }
}
