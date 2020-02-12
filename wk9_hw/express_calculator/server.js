var express = require('express');
var app = express();

var port = 3000;


app.get("/calc/:num1/:num2", (req, res) => {
	if (req.query.operation === "add") {
	  var result = Number(req.params.num1) + Number(req.params.num2);
	} else if (req.query.operation === "subtract") {
	  var result = Number(req.params.num1) - Number(req.params.num2);
	} else if (req.query.operation === "multiply") {
	  var result = Number(req.params.num1) * Number(req.params.num2);
	} else if (req.query.operation === "divide") {
	  var result = Number(req.params.num1) / Number(req.params.num2);
	}
	res.send(`the result is ${result}`);
  });

app.listen(port, () => { 
	console.log('app is running on port: ', port);
});