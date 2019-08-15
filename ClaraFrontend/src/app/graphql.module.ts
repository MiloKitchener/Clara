import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const uri = 'https://a3uudq4ib5cindzxe47x47ffrq.appsync-api.us-east-1.amazonaws.com/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        'x-api-key': 'da2-o5ebf4zuzvcqji3wl6efuhmxsy',
      }
    };
  });

  return {
    link: authLink.concat(httpLink.create({
      uri,
    })),
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
