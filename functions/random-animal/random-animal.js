const animals = require('../../dictionary/animals');

class RandomAnimal {
  constructor(){
  }

  newAnimal() {
    return animals[Math.floor(Math.random() * animals.length)]
  }
}

module.exports = RandomAnimal;
