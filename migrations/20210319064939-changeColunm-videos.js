'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('videos', 'summary', {
          type: Sequelize.STRING,
          defaultValue: '메모와 함께 하는 OTT서비스 VIMO입니다. VIMO에서는 유저들에게 최고의 경험을 전달하기 위해 늘 노력하고 있습니다. 비디오정보 제공 서비스 중 줄거리 부분은 현재 서비스 준비중에 있습니다. 최대한 빠른 시일 내에 더 풍부한 영화정보를 제공할 수 있도록 힘쓰겠습니다. VIMO를 이용해주시는 유저 여러분들께 양해의 말씀과 감사의 말씀을 전합니다. 감사합니다.'
        }, { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('videos', 'summary', {
          type: Sequelize.STRING,
          defaultValue: '줄거리를 제공하지 않는 컨텐츠입니다.'
        }, { transaction: t }),
      ]);
    });
  }
};
