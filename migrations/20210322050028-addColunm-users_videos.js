'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users_videos', 'createdAt', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('users_videos', 'updatedAt', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users_videos', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('users_videos', 'updatedAt', { transaction: t })
      ]);
    });
  }
};
