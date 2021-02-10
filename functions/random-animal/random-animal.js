const animals = require('../../dictionary/animals');

class RandomAnimal {
  constructor(){
    // this.animal;
    this.randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  }

  newAnimal() {
    const animal = this.randomAnimal.replace(' ', '-');

    return animal;
  }
}

module.exports = RandomAnimal;
