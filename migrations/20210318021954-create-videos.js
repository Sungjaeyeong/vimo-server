'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://vimo.link/images/default/thumbnail.png'
      },
      summary: {
        type: Sequelize.STRING,
        defaultValue: '줄거리를 제공하지 않는 컨텐츠입니다.'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('videos');
  }
};