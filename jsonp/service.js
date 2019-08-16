var app = require('express')();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/jsonp.js');
    // res.send(jsonMethod)
});

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
