var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/user', function(req, res) {
  res.send('user is good');
});

app.get('/username', function(req, res) {
  res.send('username is good');
});

app.use(function(req, res) {
  res.status(404).send('404 - Not Found');
});

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
