/**
 * @generated SignedSource<<9ebca0f41d6c001183d6b3c3e4f4d579>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SeriePageQuery$variables = {
  id?: string | null | undefined;
};
export type SeriePageQuery$data = {
  readonly serie: {
    readonly id: string;
    readonly name: string;
    readonly sets: ReadonlyArray<{
      readonly cardCount: {
        readonly total: number;
      };
      readonly id: string;
      readonly logo: string | null | undefined;
      readonly name: string;
      readonly releaseDate: string;
      readonly symbol: string | null | undefined;
      readonly tcgOnline: string | null | undefined;
    } | null | undefined>;
  } | null | undefined;
};
export type SeriePageQuery = {
  response: SeriePageQuery$data;
  variables: SeriePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "filters"
      }
    ],
    "concreteType": "Serie",
    "kind": "LinkedField",
    "name": "serie",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Set",
        "kind": "LinkedField",
        "name": "sets",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CardCount",
            "kind": "LinkedField",
            "name": "cardCount",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "total",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "logo",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "symbol",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tcgOnline",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SeriePageQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SeriePageQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "e12a4f8230d2275588d33a5879405ac0",
    "id": null,
    "metadata": {},
    "name": "SeriePageQuery",
    "operationKind": "query",
    "text": "query SeriePageQuery(\n  $id: String\n) {\n  serie(filters: {id: $id}) {\n    id\n    name\n    sets {\n      cardCount {\n        total\n      }\n      id\n      logo\n      name\n      releaseDate\n      symbol\n      tcgOnline\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "87eaa1c1b0e6991189dcf9871a1215ad";

export default node;
