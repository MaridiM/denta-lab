"use strict";

require("./init/app");

var _config = require("./init/config");

var _server = require("./init/server");

require("./init/db");

_server.server.listen(_config.PORT, function (err) {
  err ? console.log('❌ Server is not running. ' + err) : console.log("\u2714\uFE0F Server is running on http://localhost:".concat(_config.PORT));
});
//# sourceMappingURL=index.js.map