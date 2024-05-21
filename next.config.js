module.exports = {
  // set base path for github pages deploy
  // https://nextjs.org/docs/api-reference/next.config.js/basepath
  basePath:
    process.env.NODE_ENV === "production"
      ? "/next-relay-graphql-pokemon-example"
      : "",
  compiler: {
    // This should match relay.config.js
    relay: {
      exclude: ["**/.next/**", "**/__generated__/**", "**/node_modules/**"],
      language: "typescript",
      schema: "./schema.graphql",
      src: "./",
    },
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};
