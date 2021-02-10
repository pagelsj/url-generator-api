const AWS = require('aws-sdk');

module.exports = class DynamoDBRetrieve {

  constructor(tableName, url, newUrl) {
    this.tableName = tableName;

    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }

  respSuccess(results) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(results)
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
      TableName: process.env.DYNAMODB_TABLE
    };
  }

  retrieveAllUrls() {
    this.buildParams();
    return this.dynamoDb.scan(this.params).promise();
  }

}
