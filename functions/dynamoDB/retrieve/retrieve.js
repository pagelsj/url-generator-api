const AWS = require('aws-sdk');

module.exports = class DynamoDBRetrieve {

  constructor(tableName, resultLimit) {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();

    this.tableName = tableName;
    this.resultLimit = resultLimit;
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
