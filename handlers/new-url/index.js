'use strict';

const RandomVerb = require('../../functions/random-verb/random-verb');

const UrlBuilder = require('../../functions/url-builder/url-builder');


class ClassName extends RandomVerb{
    constructor() {
      super();
      this.urlBuilder = new UrlBuilder();
    }

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


