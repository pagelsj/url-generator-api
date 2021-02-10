const adjectives = require('../../dictionary/adjectives');

class RandomAdjective {
  constructor(){
    this.randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  }

  newAdjective() {
    const adjective = this.randomAdjective.replace(' ', '-');

    return adjective;
  }
}

module.exports = RandomAdjective;
