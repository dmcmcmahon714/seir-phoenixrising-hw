var express = require('express');
var app = express();
var port = 3000;


app.get('/tip/:total/:percentage', (req, res) => {
    var result = Number(req.params.percentage) / 100 * Number(req.params.total)
        res.send(`Please tip ${result}`);
    });








app.listen(port, () => { 
	console.log('app is running on port: ', port);
});