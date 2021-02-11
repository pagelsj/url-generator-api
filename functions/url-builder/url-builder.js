const RandomWord = require('../random-word/random-word');

module.exports = class UrlBuilder {

  constructor() {
    this.randomWord = new RandomWord();
  }

  newUrl() {
    let verb = this.randomWord.newWord("verb");
    let adverb = this.randomWord.newWord("adverb");
    let animal = this.randomWord.newWord("animal");

    return `${adverb}-${verb}-${animal}.com`;
  }
}
