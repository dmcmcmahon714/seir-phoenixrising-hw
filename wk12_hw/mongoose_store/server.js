// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");



// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
app.use(methodOverride("_method"));
app.use((req, res, next) => {
    console.log("my own middleware");
    next();
  });

  const productsController = require("./controllers/products");
  // any routes that come in for fruits should be sent
  // to the fruitsContoller
  app.use("/products", productsController);
  
  app.get("/", (req, res) => {
    res.redirect("/products");
  });

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//ROUTES

// INDEX
app.get("/products/", (req, res) => {
    res.render("index.ejs", { products: products });
  });

// SHOW
app.get("/products/:id", (req, res) => {
    res.render("show.ejs", { product: products[req.params.id] });
  });

 // EDIT
app.get("/products/:id/edit", (req, res) => {
    res.render("edit.ejs", {
      product: products[req.params.id],
      index: req.params.id
    });
  });

  // CREATE
app.post("/products/", (req, res) => {
    let index = products.push(req.body) - 1;
    res.redirect(`/products/${index}`);
  });

  // DESTROY
app.delete("/products/:id", (req, res) => {
    products.splice(req.params.id, 1); //remove the item from the array
    res.redirect("/products"); //redirect to index page
  });

// UPDATE
app.put("/products/:id", (req, res) => {
    products[req.params.id] = req.body;
    res.redirect("/products");
  });

// NEW
app.get("/products/new", (req, res) => {
    res.render("new.ejs");
  });



















// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });