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
    }
  })
  return Project
}