const db = require("../models")

module.exports = (app) => {
  app.get('api/projects/', (req, res) => {
    db.Project.findAll({})
      .then(result => {
        res.json(result)
      })
  })
}