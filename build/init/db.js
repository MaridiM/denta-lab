"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Connect to  mongodb
_mongoose["default"].connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var connectionDB = _mongoose["default"].connection;
connectionDB.once('open', function () {
  return console.log('✔️ Connected to DB');
});
connectionDB.on('error', function () {
  return console.log('❌ Failed to connect to DB');
});
//# sourceMappingURL=db.js.map