const adjectives = require('../../dictionary/adjectives');

class RandomAdjective {
  constructor(){
  }

  newAdjective() {
    return adjectives[Math.floor(Math.random() * adjectives.length)]
  }
}

module.exports = RandomAdjective;
