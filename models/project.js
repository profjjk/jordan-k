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
      type: DataTypes.BLOB,
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