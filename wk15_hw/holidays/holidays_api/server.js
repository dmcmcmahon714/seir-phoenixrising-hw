const express = require('express')
const app = express()
const PORT = 3003
const mongoose = require('mongoose')
const cors = require('cors')

//...farther down the page

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/holidaysapi', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

//load CORS middleware

const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
//for production and secure envrionment do this:
/// app.use(cors(corsOptions));
app.use(cors(corsOptions)); //allows everyone.  use with caution - only for dev, not for REAL apps. 


//all the above goes above where controller is required

const holidaysController = require('./controllers/holidays.js')

// ...

app.use('/holidays', holidaysController)

















app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})