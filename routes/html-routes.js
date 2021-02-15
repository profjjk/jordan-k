var db = require("../models");

module.exports = (app) => {
  // Home Page
  app.get("/", (req, res) => {
    res.render("home", {
      title: "JK | Web Developer",
      style: "home.css",
      script: "home.js"
    });
  });

  // Life Page
  app.get("/life", (req, res) => {
    res.render("life", {
      title: "JK | My Life",
      style: "life.css",
      script: "life.js"
    });
  });

  // Work Page
  app.get("/work", async (req, res) => {
    try {
      const projects = await db.Project.findAll({});
      res.render("work", {
        title: "JK | My Work",
        style: "work.css",
        script: "work.js",
        projects: projects
      });
    } catch (error) {
      console.error(error);
    }
  });

  // Blog Page
  app.get("/blog", (req, res) => {
    res.render("blog", {
      title: "JK | My Blog",
      style: "blog.css",
      script: "blog.js"
    });
  });
}