'use strict';

const DynamoDBCreate = require('../../functions/dynamoDB/create/create');

const UrlBuilder = require('../../functions/url-builder/url-builder');
const urlBuilder = new UrlBuilder();


class NewUrl extends DynamoDBCreate{
    constructor() {
      super();

      this.tableName = process.env.DYNAMODB_TABLE;
    }

    res(event, context, callback) {
      const body = JSON.parse(event.body);
      this.url = body.url;
      this.newUrl = urlBuilder.newUrl();

      this.addToTable()
        .then(() => {
          callback(null, this.respSuccess());
        })
        .catch(error => {
          callback(null, this.respError(error));
        });
    }

}

module.exports.handler = (event, context, callback) => {
  const newUrl = new NewUrl();
  newUrl.res(event, context, callback);
}


