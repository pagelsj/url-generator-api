'use strict';

const DynamoDBRetrieve = require('../../functions/dynamoDB/retrieve/retrieve');
const ResponseFactory = require('../../functions/response/response.factory');

class GetUrls extends DynamoDBRetrieve{
    constructor() {
      super(process.env.DYNAMODB_TABLE);

      this.responseFactory = new ResponseFactory();
    }

    res(event, context, callback) {
      if(event.queryStringParameters && event.queryStringParameters.limit)
        this.resultLimit = event.queryStringParameters.limit;

      this.retrieveAllUrls()
        .then((results) => {
          let success = this.responseFactory.createSuccess(results.Items);
          callback(null, success);
        })
        .catch(err => {
          let error = this.responseFactory.createError(err);
          callback(null, error);
        });
    }

}

module.exports.handler = (event, context, callback) => {
  const getUrls = new GetUrls();
  getUrls.res(event, context, callback);
}
