"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pubSub = void 0;

var _apolloServerExpress = require("apollo-server-express");

// PubSub using for subscriptions and publish in graphql
var pubSub = new _apolloServerExpress.PubSub();
exports.pubSub = pubSub;
//# sourceMappingURL=pubSub.js.map