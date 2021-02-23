"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriptionsPath = exports.graphqlPath = exports.apolloServer = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = require("../resolvers");

// Types Deffault in graphql
var typeDefs = "type Query {\r\n    help: String\r\n}"; // Resolvers graphql

// Init Apollo server
var apolloServer = new _apolloServerExpress.ApolloServer({
  typeDefs: typeDefs,
  //types
  resolvers: _resolvers.resolvers,
  //actions
  dataSources: function dataSources() {
    // return other APIs, rest
    return {};
  },
  context: function context(_ref) {
    var req = _ref.req,
        res = _ref.res;
    // return node req, res
    return {
      req: req,
      res: res
    };
  },
  playground: {
    settings: {
      "request.credentials": "include"
    }
  }
}); // Endpoints

exports.apolloServer = apolloServer;
var graphqlPath = apolloServer.graphqlPath,
    subscriptionsPath = apolloServer.subscriptionsPath;
exports.subscriptionsPath = subscriptionsPath;
exports.graphqlPath = graphqlPath;
//# sourceMappingURL=apolloServer.js.map