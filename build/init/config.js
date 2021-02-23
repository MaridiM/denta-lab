"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsOptions = exports.sessionOptions = exports.PORT = void 0;

require('dotenv').config(); // Config server


var PORT = process.env.PORT || 8000; // Session config

exports.PORT = PORT;
var sessionOptions = {
  key: 'token',
  secret: process.env.SESSION_SECRET || 'KLJDHoihsfoihnsdfkj90JAJUvheuifoisdjf',
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 24 * 60 * 1000 // 24 hours

  }
}; // CORS config

exports.sessionOptions = sessionOptions;
var corsOptions = {
  origin: "http://localhost:".concat(PORT),
  credentials: true // for set cookie on client from server

};
exports.corsOptions = corsOptions;
//# sourceMappingURL=config.js.map