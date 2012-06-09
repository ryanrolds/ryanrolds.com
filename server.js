
var express = require('express');
var lessMiddleware = require('less-middleware');
var wheat = require('wheat');

var app = express.createServer();
app.use(lessMiddleware({
  "force": true,
  "src": __dirname + '/skin/public',
  "compress": true
}));
app.use(wheat('./'));

app.listen(1338);
