var app = require('express')();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/pageA.html');
});

app.listen(8083);

console.log('Server running at http://127.0.0.1:8083/');
