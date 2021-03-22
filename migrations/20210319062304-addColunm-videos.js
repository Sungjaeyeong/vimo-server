'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('videos', 'pubDate', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('videos', 'director', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('videos', 'actor', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('videos', 'createdAt', {
          type: Sequelize.DataTypes.DATE,
        }, { transaction: t }),
        queryInterface.addColumn('videos', 'updatedAt', {
          type: Sequelize.DataTypes.DATE,
        }, { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('videos', 'pubDate', { transaction: t }),
        queryInterface.removeColumn('videos', 'director', { transaction: t }),
        queryInterface.removeColumn('videos', 'actor', { transaction: t }),
        queryInterface.removeColumn('videos', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('videos', 'updatedAt', { transaction: t }),
      ]);
    });
  }
};
