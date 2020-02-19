const express = require('express');
const app = express();
const budget = require('./models/budget.js');
const port = 3000;

//middleware

app.use((request, response, next)=>{
    console.log('I run for all routes')
    // continue with your routing
    next();
  })

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/budget', (request, response)=>{
    response.render('index.ejs', {
        budget: budget
    });
});

app.post('/budget', (req, res)=>{
    budget.push(req.body);
    res.redirect('/budget'); //send the user back to /budget
  });

  app.post('/budget', (request, response) => {
    console.log("hit create route");
    console.log('response.body is: ', request.body)
    response.json(request.body);
});

app.get('/budget/new', (request, response)=>{
    response.render('new.ejs');
  })

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