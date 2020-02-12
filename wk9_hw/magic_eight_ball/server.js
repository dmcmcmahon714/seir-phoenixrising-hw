var express = require('express');
var app = express();
var port = 3000;


app.get('/magic/:question', (req, res) => {
    var possibleAnswers = ['It is certain', 'It is decidely so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
    var answer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
        res.send(`${answer}`);
    });


app.listen(port, () => { 
	console.log('app is running on port: ', port);
});