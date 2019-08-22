// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendIP: 'http://localhost:8000/',
  graphqlEndpoint: 'https://a3uudq4ib5cindzxe47x47ffrq.appsync-api.us-east-1.amazonaws.com/graphql',
  graphqlAPIKey: 'da2-nstn2sgtifeotgeaon27ktqix4',
  appsyncRegion: 'us-east-1',
  backendIPWS: 'ws://35.182.196.173/',
  access_token_name: 'access_token',
  refresh_token_name: 'refresh_token',
  mock: false
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
