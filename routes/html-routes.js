var db = require("../models");

module.exports = (app) => {
  // Home Page
  app.get("/", (req, res) => {
    res.render("home", {
      title: "Jordan Kelly | Web Developer",
      style: "home.css",
      script: "home.js"
    })
  })

  // Life Page
  app.get("/life", (req, res) => {
    res.render("life", {
      title: "Jordan Kelly | My Life",
      style: "life.css",
      script: "home.js"
    })
  })

  // Work Page
  app.get("/work", (req, res) => {
    res.render("work", {
      title: "Jordan Kelly | My Work",
      style: "work.css",
      script: "home.js"
    })
  })
}