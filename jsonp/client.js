var app = require('express')();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/jsonP.html');
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
