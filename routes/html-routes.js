// Dependencies
// =============================================================
var express = require("express");
// var session = require("express-session");
// var exphbs = require('express-handlebars');
// var _handlebars = require('handlebars');
// var { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Configure Handlebars.
// =============================================================
// var hbs = exphbs.create({
//   defaultLayout: "main", 
  // handlebars: allowInsecurePrototypeAccess(_handlebars),
// });
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: false }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, function() {
  console.log("Server listening on " + PORT);
})