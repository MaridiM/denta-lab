"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var app = (0, _express["default"])();
exports.app = app;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])(_config.sessionOptions));
app.use((0, _cors["default"])(_config.corsOptions)); // Static on  production build

if (process.env.NODE_ENV === 'production') {
  app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, 'client', 'build', 'index.html'));
  });
} // Endpoint
//# sourceMappingURL=app.js.map