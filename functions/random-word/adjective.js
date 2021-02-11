const adjectives = require('../../dictionary/adjectives');

class RandomAdjective {

  newAdjective() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const adjective = randomAdjective.replace(' ', '-');

    return adjective;
  }
}

module.exports = RandomAdjective;
