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
    }
  }
  respError(error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'There was an error adding new article insight to the DB. Try again later. ' + error,
    };
  }

  buildParams() {
    console.log('1');
    this.params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        url: this.url,
        newUrl: this.newUrl
      }
    }
  }

  addToTable() {
    this.buildParams();

    try{
      console.log('2', this.params.Item);
      return this.dynamoDb.put(this.params).promise();
    } catch (e) {
      console.log("e", e);
    }
  }

}
