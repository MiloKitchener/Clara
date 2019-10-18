/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiClarafrontendGraphQLAPIIdOutput = process.env.API_CLARAFRONTEND_GRAPHQLAPIIDOUTPUT
var apiClarafrontendGraphQLAPIEndpointOutput = process.env.API_CLARAFRONTEND_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_CLARAFRONTEND_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();

exports.handler = async (event) => {
    console.log(event);
    const req = new AWS.HttpRequest(appsyncUrl, region);
    const query = `
     mutation createIoTData($input: CreateIoTDataInput!) {
      createIoTData(input: $input) {
        uuid
        ts
        type
        battery
        moisture
        CO2
        pH
        conductivity
        solids
        salinity
        s_gravity
        uptime
      }
    }`;

    req.method = "POST";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
      query: query,
      operationName: "createIoTData",
      variables: {input: event}
    });

    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

    const data = await new Promise((resolve, reject) => {
      const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
        result.on('data', (data) => {
          console.log(JSON.parse(data.toString()));
          resolve(JSON.parse(data.toString()));
        });
      });

      httpRequest.write(req.body);
      httpRequest.end();
    });

    return {
      statusCode: 200,
      body: data
    };
};
