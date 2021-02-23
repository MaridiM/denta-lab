"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "apolloServer", {
  enumerable: true,
  get: function get() {
    return _apolloServer.apolloServer;
  }
});
exports.server = void 0;

var _http = _interopRequireDefault(require("http"));

var _app = require("./app");

var _apolloServer = require("./apolloServer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Core
// Servers express app / apollo server
// Wrapped express app in http server
var server = _http["default"].createServer(_app.app); // Install subscriptions handlers by server


exports.server = server;

_apolloServer.apolloServer.installSubscriptionHandlers(server); // Endpoint
//# sourceMappingURL=server.js.map