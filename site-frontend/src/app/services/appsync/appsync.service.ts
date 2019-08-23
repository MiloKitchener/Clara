import {Injectable} from '@angular/core';
import AWSAppSyncClient from 'aws-appsync';
import {environment} from '../../../environments/environment';
import {AUTH_TYPE} from 'aws-appsync/lib';

@Injectable({
  providedIn: 'root'
})
export class AppsyncService {

   hydratedClient;

   constructor() {
     // this.hydratedClient = new AWSAppSyncClient({
     //   url: environment.graphqlEndpoint,
     //   region: environment.appsyncRegion,
     //   auth: {
     //     type: AUTH_TYPE.API_KEY,
     //     apiKey: environment.graphqlAPIKey
     //   }
     // });
   }

   hc() {
     return this.hydratedClient.hydrated();
   }
}
