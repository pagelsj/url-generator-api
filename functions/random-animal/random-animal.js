const animals = require('../../dictionary/animals');

class RandomAnimal {

  newAnimal() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const animal = randomAnimal.replace(' ', '-');

    return animal;
  }
}

module.exports = RandomAnimal;
