const express = require('express')
const app = express()
const PORT = 3005
const mongoose = require('mongoose')
const cors = require('cors')
const animalsController = require('./controllers/animals.js')

//...farther down the page

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect("mongodb://localhost:27017/animals", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

//load CORS middleware
// CORS middleware:
const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors());


//all the above goes above where controller is required



// ...

app.use('/animals', animalsController)


app.listen(PORT, () => {
  console.log('🎉🎊', 'animals on', PORT, '🎉🎊',)
})