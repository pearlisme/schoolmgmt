var express = require('express');
var app = express();

app.get('/a', function (req, res) {
  res.send('Hello World!');
});
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/html/home.html');
});
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!'+process.env.PORT);
});