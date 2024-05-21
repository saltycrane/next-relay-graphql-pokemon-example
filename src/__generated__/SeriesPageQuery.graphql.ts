/**
 * @generated SignedSource<<2cd1289bdca6a6c2d47d99be19ce8ea5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SeriesPageQuery$variables = Record<PropertyKey, never>;
export type SeriesPageQuery$data = {
  readonly series: ReadonlyArray<{
    readonly id: string;
    readonly logo: string | null | undefined;
    readonly name: string;
  } | null | undefined> | null | undefined;
};
export type SeriesPageQuery = {
  response: SeriesPageQuery$data;
  variables: SeriesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Serie",
    "kind": "LinkedField",
    "name": "series",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "logo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SeriesPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SeriesPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a5139d703d4737ba5dd1ae835d59ecce",
    "id": null,
    "metadata": {},
    "name": "SeriesPageQuery",
    "operationKind": "query",
    "text": "query SeriesPageQuery {\n  series {\n    id\n    logo\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "4661e9645aab4d857dcbb9ca0a3de277";

export default node;
