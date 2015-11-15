var express = require('../node_modules/express');
var app = express();

app.use(express.static('./client'));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nTrack');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("db connection");
});

var user = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    personalData: { type: mongoose.Schema.Types.Mixed, default: {} },
    applications: { type: mongoose.Schema.Types.Mixed, default: {} }
});
var User = mongoose.model('User', user);

app.get('/', function (req, res) {
  res.sendFile('./client/index.html');
  res.sendStatus(200);
});

app.post('/login', function (req, res) {
  res.status(401).end();
});

app.post('/signup', function (req, res) {
  res.status(401).end();
});

app.get('/logout', function (req, res) {
  res.sendStatus(200);
});


var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Listening on port ', port);
});
