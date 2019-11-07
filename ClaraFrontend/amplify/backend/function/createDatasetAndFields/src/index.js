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
  console.log(url);
  let fields = [];
  let name = '';
  await axios.get(url + '?f=json').then((response) => {
    name = response.data.name;
    fields = response.data.fields;
  });

  // Update the database to contain our new Dataset and get the ID assigned to it
  const datasetMutation = `mutation CreateDataset($input: CreateDatasetInput!) {
        createDataset(input: $input) {
          id
          name
          desc
          api_url
          parent_url
          type
        }
      }`;

  let req = buildRequest(datasetMutation, "CreateDataset", {'name': name, 'api_url': url});
  let signer = new AWS.Signers.V4(req, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  const datasetData = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      result.on('data', (data) => {
        data = JSON.parse(data.toString());
        console.log(data);
        resolve(data);
      });
    });
    httpRequest.write(req.body);
    httpRequest.end();
  });
  let datasetID = datasetData.data.createDataset.id;

  // Update database to contain the Dataset's associated fields
  const fieldMutation = `mutation CreateField($input: CreateFieldInput!) {
        createField(input: $input) {
          id
          name
          normalized_name
          alias
          type
        }
      }`;
  let fieldsData = [];
  // Publish all fields of the Dataset using the corresponding ID
  for (let i = 0; i < fields.length; ++i) {
    let field = fields[i];
   req = buildRequest(fieldMutation, "CreateField",
    {
      'name': field.name,
      'normalized_name': field.name,
      'alias': field.alias,
      'type': field.type,
      'fieldDatasetId': datasetID
    });
  signer = new AWS.Signers.V4(req, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      result.on('data', (data) => {
        data = JSON.parse(data.toString());
        resolve(data);
      });
    });
    httpRequest.write(req.body);
    httpRequest.end();
  });
  fieldsData.push(data);
  }

  return {
    statusCode: 200,
    body: {
      datasetData: datasetData,
      fieldsData: fieldsData
    }
  };
};


// Build a POST request to make a GraphQL query. Used to create a new Dataset and its Fields.
function buildRequest(query, operation, input) {
  const req = new AWS.HttpRequest(appsyncUrl, region);
  req.method = "POST";
  req.headers.host = endpoint;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: query,
    operationName: operation,
    variables: { input: input}
  });

  return req;
}
