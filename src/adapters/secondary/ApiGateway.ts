import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientUri = "https://countries.trevorblades.com";

export default class ApiGateway {
  protected client(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
      connectToDevTools: true,
      cache: new InMemoryCache(),
      uri: clientUri,
    });
  }
}
