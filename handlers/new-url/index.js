'use strict';

const RandomVerb = require('../../functions/random-verb/random-verb');
const RandomAdverb = require('../../functions/random-adverb/random-adverb');
const RandomAdjective = require('../../functions/random-adjective/random-adjective');
const RandomAnimal = require('../../functions/random-animal/random-animal');

const UrlBuilder = require('../../functions/url-builder/url-builder');


class ClassName extends RandomVerb{
    constructor() {
      super();
      // console.log(UrlBuilder);
      this.urlBuilder = new UrlBuilder();

      // this.adverb = new RandomAdverb();
      // this.adjective = new RandomAdjective();
      // this.animal = new RandomAnimal();
    }

    // newUrl() {
    //   // let verb = this.newVerb();
    //   // let adverb = this.adverb.newAdverb();
    //   // let adj = this.adjective.newAdjective()
    //   // let animal = this.animal.newAnimal()

    //   // return this.urlBuilder.newUrl();
    //   // return `${adverb}-${verb}-${animal}.com`;
    // }

    res(event, context, callback) {

      let resp = {
        statusCode: 200,
        body: JSON.stringify(
          {
            'new-url': this.urlBuilder.newUrl()
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


