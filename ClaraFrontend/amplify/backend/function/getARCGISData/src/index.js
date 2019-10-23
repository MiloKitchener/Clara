/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const request = require('request');

exports.handler = async function (event, context) {

  const url = event.arguments.dataset + 'query?where=1%3D1&returnGeometry=false&f=json&outFields=' + event.arguments.field;

  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if(error) {
        reject(error);
      }
      if(body) {
        // Parse the data json
        let json = JSON.parse(body);
        let dataList = [];
        // // Get the number from the field attribute
        for(let i = 0; i < json['features'].length; i++) {
          dataList.push(json['features'][i]['attributes'][event.arguments.field]);
        }
        // Send the data
        resolve(dataList);
      }
    });
  });
};
