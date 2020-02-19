const express = require('express');
const app = express();
const port = 3001;

const pokemon = require('./models/pokemon.js')

//middlware

app.use(express.static('./public'))

app.get('/', (request, response)=>{
    response.send('Welcome to the Pokemon App')
    });

    app.get('/pokemon', (req, res) => {
        // capitlize first letter
        for (let poke of pokemon) {
          // split name into letters
          let splitName = poke.name.split('')
          // capitilize letters
          splitName[0] = splitName[0].toUpperCase()
          // join back together
          poke.name = splitName.join('')
        }
        // render
        res.render('index.ejs', {
          pokemon: pokemon
        })
      })

//show

app.get('/pokemon/:indexOfPokemon', (req, res) => {
    //render
    res.render('show.ejs', {
      pokemon: pokemon[req.params.indexOfPokemon]
    })
  })

app.listen(port, ()=>{
    console.log(`connected to poke express on port: ${port}`);
});