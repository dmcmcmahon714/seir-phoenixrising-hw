const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js')

app.get('/', (request, response)=>{
    response.send('Welcome to the Pokemon App')
    });

    app.get('/pokemon', (req, res) => {
        // capitalizing just the first letter by looping through the pokemon database
        for (let poke of pokemon) {
          // split the name into its each individual letter
          let splitName = poke.name.split('')
          // capitalize the first letter
          splitName[0] = splitName[0].toUpperCase()
          // join the letters back together
          poke.name = splitName.join('')
        }
        // render
        res.render('index.ejs', {
          pokemon: pokemon
        })
      })

app.listen(port, ()=>{
    console.log('I am listening on port 3000');
});