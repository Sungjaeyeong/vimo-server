'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Ananymous'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePic: {
      type: DataTypes.STRING,
      defaultValue: 'https://vimo.link/images/default/profilepic.png'
    },
    isSocialLogin: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: false,
    modelName: 'users',
  });
  return users;
};