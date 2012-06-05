
var express = require('express');
var wheat = require('wheat');

var app = express.createServer();
app.use(function(req, res, next) {
  console.log('asdfasdfffffff');
  next();
});
app.use(wheat('./'));
app.use(function(req, res, next) {
  console.log('asdfasdf');
  next();
});

app.listen(1338);
