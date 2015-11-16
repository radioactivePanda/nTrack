
exports.home = function(req, res) {
  res.sendFile('./client/index.html');
  res.sendStatus(200);
};

exports.login = function(req, res) {
  res.status(401).end();
};

exports.signup = function(req, res) {
  res.status(401).end();
};

exports.logout = function(req, res) {
  res.sendStatus(200);
};
