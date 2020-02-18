const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

app.get('/', (req, res) => {
    console.log("Up and running");
    res.send('Welcome to the Pokemon App!');
  });

  app.get('/pokemon', (request, response)=>{
    response.send(pokemon);
  });


app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});