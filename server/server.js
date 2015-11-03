var express = require('../node_modules/express');
var app = express();

app.use(express.static('./client'));

app.get('/', function (req, res) {
  res.sendFile('./client/index.html');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Listening on port ', port);
});
