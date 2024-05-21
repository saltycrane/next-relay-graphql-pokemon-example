/**
 * @generated SignedSource<<1491a20d77d82387c44c3760afe3591b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CardPageQuery$variables = {
  id?: string | null | undefined;
};
export type CardPageQuery$data = {
  readonly card: {
    readonly abilities: ReadonlyArray<{
      readonly effect: string | null | undefined;
      readonly name: string | null | undefined;
      readonly type: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly attacks: ReadonlyArray<{
      readonly cost: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly damage: string | null | undefined;
      readonly effect: string | null | undefined;
      readonly name: string;
    } | null | undefined> | null | undefined;
    readonly category: string;
    readonly description: string | null | undefined;
    readonly dexId: ReadonlyArray<number | null | undefined> | null | undefined;
    readonly effect: string | null | undefined;
    readonly energyType: string | null | undefined;
    readonly evolveFrom: string | null | undefined;
    readonly hp: number | null | undefined;
    readonly illustrator: string | null | undefined;
    readonly image: string | null | undefined;
    readonly item: {
      readonly effect: string;
      readonly name: string;
    } | null | undefined;
    readonly legal: {
      readonly expanded: boolean | null | undefined;
      readonly standard: boolean | null | undefined;
    };
    readonly level: number | null | undefined;
    readonly localId: string;
    readonly name: string;
    readonly rarity: string;
    readonly regulationMark: string | null | undefined;
    readonly resistances: ReadonlyArray<{
      readonly type: string;
      readonly value: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly retreat: number | null | undefined;
    readonly set: {
      readonly name: string;
      readonly serie: {
        readonly name: string;
      };
    };
    readonly stage: string | null | undefined;
    readonly suffix: string | null | undefined;
    readonly trainerType: string | null | undefined;
    readonly types: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly variants: {
      readonly firstEdition: boolean;
      readonly holo: boolean;
      readonly normal: boolean;
      readonly reverse: boolean;
      readonly wPromo: boolean;
    } | null | undefined;
    readonly weaknesses: ReadonlyArray<{
      readonly type: string;
      readonly value: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type CardPageQuery = {
  response: CardPageQuery$data;
  variables: CardPageQuery$variables;
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
  "name": "effect",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  }
],
v5 = [
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
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "card",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AbilitiesListItem",
        "kind": "LinkedField",
        "name": "abilities",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AttacksListItem",
        "kind": "LinkedField",
        "name": "attacks",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cost",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "damage",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
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
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dexId",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "energyType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "evolveFrom",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hp",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "illustrator",
        "storageKey": null
      },
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
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "localId",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "rarity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "regulationMark",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "WeakResListItem",
        "kind": "LinkedField",
        "name": "resistances",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "retreat",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Set",
        "kind": "LinkedField",
        "name": "set",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Serie",
            "kind": "LinkedField",
            "name": "serie",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "suffix",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "trainerType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "types",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Variants",
        "kind": "LinkedField",
        "name": "variants",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstEdition",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "holo",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "normal",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reverse",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "wPromo",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "WeakResListItem",
        "kind": "LinkedField",
        "name": "weaknesses",
        "plural": true,
        "selections": (v4/*: any*/),
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
    "name": "CardPageQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardPageQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "08a551803807393a73818abc767a5ea1",
    "id": null,
    "metadata": {},
    "name": "CardPageQuery",
    "operationKind": "query",
    "text": "query CardPageQuery(\n  $id: ID\n) {\n  card(filters: {id: $id}) {\n    abilities {\n      effect\n      name\n      type\n    }\n    attacks {\n      cost\n      damage\n      effect\n      name\n    }\n    category\n    description\n    dexId\n    effect\n    energyType\n    evolveFrom\n    hp\n    illustrator\n    image\n    item {\n      effect\n      name\n    }\n    legal {\n      expanded\n      standard\n    }\n    level\n    localId\n    name\n    rarity\n    regulationMark\n    resistances {\n      type\n      value\n    }\n    retreat\n    set {\n      name\n      serie {\n        name\n      }\n    }\n    stage\n    suffix\n    trainerType\n    types\n    variants {\n      firstEdition\n      holo\n      normal\n      reverse\n      wPromo\n    }\n    weaknesses {\n      type\n      value\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8e7c2858b0242512e2c18e9cc6e09e09";

export default node;
