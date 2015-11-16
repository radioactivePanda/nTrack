var express = require('../node_modules/express');
var app = express();
var handler = require('./config/request-handler.js');

app.use(express.static('./client'));

app.get('/', handler.home);

app.post('/login', handler.login);

app.post('/signup', handler.signup);

app.get('/logout', handler.logout);


var port = process.env.PORT || 3000;

app.listen(port)

console.log('Listening on port ', port);
