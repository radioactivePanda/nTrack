
module.exports.home = function(req, res) {
  res.sendFile('./client/index.html');
  res.sendStatus(200);
};

module.exports.login = function(req, res) {
  res.status(401).end();
};

module.exports.signup = function(req, res) {
  res.status(401).end();
};

module.exports.logout = function(req, res) {
  res.sendStatus(200);
};
