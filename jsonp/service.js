var app = require('express')();

app.get('/', function (req, res) {
    // res.sendfile(__dirname + '/pageB.html');
    res.json({
        "code": 0,
        "name": "wml",
        "age": 26
    })
});

app.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
