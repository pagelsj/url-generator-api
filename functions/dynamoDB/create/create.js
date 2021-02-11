const AWS = require('aws-sdk');
const uuid = require('uuid');


module.exports = class DynamoDBCreate {

  constructor(tableName, url, newUrl) {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();

    this.tableName = tableName;
    this.url = url;
    this.newUrl = newUrl;
  }

  buildParams() {
    this.params = {
      TableName: this.tableName,
      Item: {
        id: uuid.v1(),
        url: this.url,
        newUrl: this.newUrl
      }
    };
  }

  addToTable() {
    this.buildParams();
    return this.dynamoDb.put(this.params).promise();
  }

}
