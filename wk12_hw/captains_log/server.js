const express = require("express");
const app = express();
const port = 3000;

// NEW
app.get("/captains_log/new", (req, res) => {
    res.render("new.ejs");
  });

  // CREATE
  app.post("/items/", (req, res) => {
    Fruit.create(req.body, (error, result) => {
      // res.send(result);
      res.redirect("/show.ejs");
    });
  });











// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });
