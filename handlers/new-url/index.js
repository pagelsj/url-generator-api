'use strict';

const RandomVerb = require('../../functions/random-verb/random-verb');
const RandomAdverb = require('../../functions/random-adverb/random-adverb');
const RandomAdjective = require('../../functions/random-adjective/random-adjective');
const RandomAnimal = require('../../functions/random-animal/random-animal');


class ClassName extends RandomVerb{
    constructor() {
      super();

      this.adverb = new RandomAdverb();
      this.adjective = new RandomAdjective();
      this.animal = new RandomAnimal();
    }

    newUrl() {
      let verb = this.newVerb();
      let adverb = this.adverb.newAdverb();
      let adj = this.adjective.newAdjective()
      let animal = this.animal.newAnimal()

      return `${adverb}-${verb}-${animal}.com`;
    }

    res(event, context, callback) {

      let resp = {
        statusCode: 200,
        body: JSON.stringify(
          {
            'new-url': this.newUrl()
          }
        ),
      };
      callback(null, resp);
    }

}

const className = new ClassName();
module.exports.handler = (event, context, callback) => {
  className.res(event, context, callback);
}


