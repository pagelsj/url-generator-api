'use strict';


class ClassName extends Employee{
    constructor() {
      super();
    }

    response(event, context, callback) {

      let resp = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: "Working"
          }
        ),
      };
      callback(null, resp);
    }
}

const className = new ClassName();
module.exports.handler = (event, context, callback) => {
  className.response(event, context, callback);
}


