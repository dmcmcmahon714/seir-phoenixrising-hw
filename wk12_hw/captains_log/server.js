const express = require("express");
const app = express();
const port = 3000;

// NEW
app.get("/items/new", (req, res) => {
    res.render("new");
  });











// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });
