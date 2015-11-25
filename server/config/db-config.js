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
var Users = mongoose.model('User', user);

module.exports.user = user;
module.exports.Users = Users;
