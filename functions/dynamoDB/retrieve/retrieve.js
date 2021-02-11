'use strict';

const AWS = require('aws-sdk');

module.exports = class DynamoDBRetrieve {

  constructor(tableName) {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();

    this.tableName = tableName;
    this.resultLimit = null;
  }

  buildParams() {
    this.params = {
      TableName: this.tableName
    };
    if(this.resultLimit)
      this.params['Limit'] = this.resultLimit;
  }

  retrieveAllUrls() {
    this.buildParams();
    return this.dynamoDb.scan(this.params).promise();
  }

}
