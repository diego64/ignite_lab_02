import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nroyfa0lh001ywesw67btf/master',
  cache: new InMemoryCache()
});