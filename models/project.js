module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {len: [1]}
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    }
  })
  return Project
}

// TO DO
// =============================
// Add a technologies used section for each project.
// Rewrite the descriptions to something better.
// Add images directly into database.
// Maybe switch over to MongoDB when I know how to use it.