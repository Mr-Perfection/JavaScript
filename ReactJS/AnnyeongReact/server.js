var express = require('express')

// create an app
var app = express();

// tell which server to serve
// which folder name to expose to the public
app.use(express.static('public'));

// listen() takes two args: port number, function
app.listen(3000, function() {
  console.log('Annyeong, server is up and running sir!')
});
