const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Organization extends Model {}

Organization.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orgname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "organization",
  }
);

module.exports = Organization