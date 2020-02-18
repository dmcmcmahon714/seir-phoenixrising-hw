const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Response@");
    res.send('Welcome to the Pokemon app!');
  });

app.listen(3000, ()=> {
    console.log("I am listening for requests!!!");
})