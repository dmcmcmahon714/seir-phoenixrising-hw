const express = require('express');
const app = express();
const budget = require('./models/budget.js');
const port = 3000;

app.use(express.static('public'));

  app.get('/budget', (request, response)=>{
    response.render('index.ejs', {
        budget: budget
    });
});

app.get('/budget/:indexOfBudgetArray', (request, response)=>{
    response.render('show.ejs',
        {
            budget: budget[request.params.indexOfBudgetArray]
        }
    );
});

app.get('/budget/new', (request, response)=>{
    response.render('new.ejs');
  })


app.listen(port,() => {
    console.log('listening on port' , port);
});