'use strict';

const { ValidationErrorItem } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Ananymous'
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      profilePic: {
        type: Sequelize.STRING,
        defaultValue: 'https://vimo.link/images/default/profilepic.png'
      },
      isSocialLogin: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

'vimo.link/vimo/src/index.html'