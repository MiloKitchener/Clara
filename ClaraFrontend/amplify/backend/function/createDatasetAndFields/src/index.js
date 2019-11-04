/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiClarafrontendGraphQLAPIIdOutput = process.env.API_CLARAFRONTEND_GRAPHQLAPIIDOUTPUT
var apiClarafrontendGraphQLAPIEndpointOutput = process.env.API_CLARAFRONTEND_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const axios = require('axios');
const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_CLARAFRONTEND_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();

exports.handler = async function (event, context) {
  console.log(event);

  let url = event.arguments.url;
  url = url.substring(5, url.length - 1);
  console.log(url);
  let fields = [];
  let name = '';
  await axios.get(url + '?f=json').then((response) => {
    console.log(response);
    response.data.fields.forEach((field) => {
      fields.push(field.name);
      console.log(field.name);
    });
    console.log(fields);
  });
  console.log('post post');

  const req = new AWS.HttpRequest(appsyncUrl, region);
  const statement = `mutation CreateDataset($input: CreateDatasetInput!) {
        createDataset(input: $input) {
          id
          name
          desc
          api_url
          parent_url
          type
        }
      }`;

  req.method = "POST";
  req.headers.host = endpoint;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: statement,
    operationName: "CreateDataset",
    variables: {input: {
        'name': name,
        'api_url': url
      }}
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
    // body: data
    body: 'tempBody'
  };
};

