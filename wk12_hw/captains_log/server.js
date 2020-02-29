const express = require("express");
const app = express();
const port = 3000;
// Load up mongoose npm as mongoose:
// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");
// allows server to receive json data
app.use(express.urlencoded({ extended: true }));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/logsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const log = require('./models/logs.js');
const seedData = require('./models/seed_items.js');


// NEW
app.get("/captains_log/new", (req, res) => {
    res.render("new.ejs");
  });

  // CREATE
  app.post("/logs/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.shipIsBroken = false;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.shipIsBroken = true;
  }
  log.create(req.body, (error, result) => {
    // res.send(result);
    res.redirect("/logs");
  });
});

  // INDEX
app.get("/logs/", (req, res) => {
  log.find({}, (error, logs) => {
    // res.send(logs);
    res.render('index.ejs')
  });
});

// SHOW ALL
app.get("/logs/", (req, res) => {
  log.find({}, (error, logs) => {
    // res.send(logs);
    res.render("show.ejs", { logs });
  });
});


// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });
