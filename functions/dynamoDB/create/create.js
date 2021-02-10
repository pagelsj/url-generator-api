const AWS = require('aws-sdk');
const uuid = require('uuid');


module.exports = class DynamoDBCreate {

  constructor(tableName, url, newUrl) {
    this.tableName = tableName;
    this.url = url;
    this.newUrl = newUrl;

    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }

  respSuccess() {
    console.log("newUrl", this.newUrl);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(this.params.Item)
    };
  }

  respError(error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'There was an error adding new article insight to the DB. Try again later. ' + error,
    };
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
