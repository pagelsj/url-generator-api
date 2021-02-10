'use strict';

const DynamoDBRetrieve = require('../../functions/dynamoDB/retrieve/retrieve');

class GetUrls extends DynamoDBRetrieve{
    constructor() {
      super();

      this.tableName = process.env.DYNAMODB_TABLE;
    }

    res(event, context, callback) {
      this.retrieveAllUrls()
        .then((results) => {

          callback(null, this.respSuccess(results));
        })
        .catch(error => {

          callback(null, this.respError(error));
        });
    }

}

module.exports.handler = (event, context, callback) => {
  const getUrls = new GetUrls();
  getUrls.res(event, context, callback);
}
