/**
 * @generated SignedSource<<efd0aff5843686b61059b2c1f0d3ef7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SetPageQuery$variables = {
  id?: string | null | undefined;
};
export type SetPageQuery$data = {
  readonly set: {
    readonly cards: ReadonlyArray<{
      readonly category: string;
      readonly hp: number | null | undefined;
      readonly id: string;
      readonly image: string | null | undefined;
      readonly legal: {
        readonly expanded: boolean | null | undefined;
        readonly standard: boolean | null | undefined;
      };
      readonly level: number | null | undefined;
      readonly name: string;
      readonly rarity: string;
    } | null | undefined>;
    readonly id: string;
    readonly name: string;
    readonly serie: {
      readonly id: string;
      readonly name: string;
    };
  } | null | undefined;
};
export type SetPageQuery = {
  response: SetPageQuery$data;
  variables: SetPageQuery$variables;
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
    "concreteType": "Set",
    "kind": "LinkedField",
    "name": "set",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "cards",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hp",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Legal",
            "kind": "LinkedField",
            "name": "legal",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "expanded",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "standard",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "level",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rarity",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Serie",
        "kind": "LinkedField",
        "name": "serie",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "SetPageQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetPageQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "be3ba74d41981d32238be25fc0f83a67",
    "id": null,
    "metadata": {},
    "name": "SetPageQuery",
    "operationKind": "query",
    "text": "query SetPageQuery(\n  $id: String\n) {\n  set(filters: {id: $id}) {\n    cards {\n      category\n      hp\n      id\n      image\n      legal {\n        expanded\n        standard\n      }\n      level\n      name\n      rarity\n    }\n    id\n    name\n    serie {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d43af8e02b4bd188cc1c01e8906623a8";

export default node;
