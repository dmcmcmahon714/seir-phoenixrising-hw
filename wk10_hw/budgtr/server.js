const express = require('express');
const app = express();
const budget = require('./models/budget.js');
const port = 3000;

app.use((request, response, next)=>{
    console.log('I run for all routes')
    // continue with your routing
    next();
  })

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


app.listen(port,() => {
    console.log('listening on port' , port);
});