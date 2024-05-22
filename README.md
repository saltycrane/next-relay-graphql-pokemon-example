# next-relay-graphql-pokemon-example

Quick and dirty Pokemon TCG web UI using the [TCGdex](https://github.com/tcgdex/cards-database) [GraphQL API](https://api.tcgdex.net/v2/graphql). Initially this was supposed to be a proof-of-concept of the [Next.js `rewrites` feature](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites), but that doesn't work with the Next.js static export for the GitHub Pages deploy, so I removed it.

**Deployed to GitHub Pages here:** https://saltycrane.github.io/next-relay-graphql-pokemon-example/

## Usage

```
$ npm install
$ npm run dev
```

Go to http://localhost:3000 in the browser

## Uses

- [TCGdex](https://github.com/tcgdex/cards-database) [GraphQL API](https://api.tcgdex.net/v2/graphql)
- [Next.js](https://nextjs.org/) Pages Router
- [React](https://react.dev/)
- [Relay](https://relay.dev/)
- [GraphQL](https://graphql.org/)

## Doesn't use

- Next.js App Router or React Server Components
- Next.js Server Side Rendering
- Next.js image optimization
- React Transitions
- Relay Fragments
