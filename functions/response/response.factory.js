'use strict';

module.exports = class ResponseFactory {

  createSuccess(responseContent) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(responseContent)
    };
  };

  createError(error) {
    return {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Error:' + error,
    };
  };
}
