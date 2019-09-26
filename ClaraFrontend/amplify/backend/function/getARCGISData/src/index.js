/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const https = require('https');

exports.handler = async function (event, context) {
  let url = event.dataset + 'query?where=1%3D1&returnGeometry=false&f=json&outFields=' + event.field;

  return new Promise(function(resolve, reject) {
    https.get(url, (res) => {
      let body = '';
      // Aggregate all data
      res.on('data', (data)  => {
        body += data;
      });
      // When all data has been received, format it
      res.on('end', () => {
        // Parse the data json
        let json = JSON.parse(body);
        let dataList = [];
        // Get the number from the field attribute
        for(let i = 0; i < json['features']; i++) {
          console.log(json['features'][i]);
          dataList.push(json['features'][i]['attributes'].pop(event.field));
        }
        // Send the data
        resolve("Test");
      });
      res.on('error', (err) => {
        reject(err);
      });
    });
  })
};

//         # Get the data from this dataset
//         data1 = fetch_data(url1, 'x', field_name)

    // url = url + 'query?where=1%3D1&returnGeometry=false&f=json' + "&outFields=" + field_name
    // # Request the api url and get the response in JSON
    // r = requests.post(url)
    // json_response = json.loads(r.text)
    //
    // # Pull out the values for the field
    // data_list = []
    // for attribute in json_response['features']:
    //     data = attribute['attributes'].pop(field_name)
    //     # Assign the values to a new variable
    //     data_list.append(data)

//
//         data2 = fetch_data(url2, 'y', field_name)
//         return Response(combine_data_list(data1, data2))
