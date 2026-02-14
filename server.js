var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/html/index.html');
});

app.get('/whd', function (req, res) {
 res.redirect('https://pixees.fr/informatiquelycee/node_a3.html')
});
app.listen(8080);