import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

function fetchQuery(request: RequestParameters, variables: Variables) {
  return fetch("https://api.tcgdex.net/v2/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

export const environment = new Environment({
  network,
  store,
});
