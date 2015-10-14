var express = require('../node_modules/express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Listening on port ', port);
});
