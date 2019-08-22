import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import {environment} from '../environments/environment';

const uri = environment.graphqlEndpoint; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {

  const authLink = setContext((_, { headers }) => {
    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'x-api-key': environment.graphqlAPIKey,
      }
    };
  });

  const http = httpLink.create({ uri });

  // const ws = new WebSocketLink({
  //   uri,
  //   options: {
  //     reconnect: true,
  //   },
  // });

  const link = split(
    // Split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    // ws,
    http,
  );

  return {
    link: authLink.concat(link),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

