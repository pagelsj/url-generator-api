'use strict';

const DynamoDBCreate = require('../../functions/dynamoDB/create/create');
const ResponseFactory = require('../../functions/response/response.factory');

const UrlBuilder = require('../../functions/url-builder/url-builder');
const urlBuilder = new UrlBuilder();


class NewUrl extends DynamoDBCreate{
    constructor() {
      super();

      this.tableName = process.env.DYNAMODB_TABLE;
      this.responseFactory = new ResponseFactory();
    }

    res(event, context, callback) {
      const body = JSON.parse(event.body);

      this.url = body.url;
      this.newUrl = urlBuilder.newUrl();

      this.addToTable()
        .then(() => {
          let success = this.responseFactory.createSuccess(this.params.Item);
          callback(null, success);
        })
        .catch(err => {
          let error = this.responseFactory.createError(err);
          callback(null, error);
        });
    }

}

module.exports.handler = (event, context, callback) => {
  const newUrl = new NewUrl();
  newUrl.res(event, context, callback);
}
