'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  videos.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://vimo.link/images/default/thumbnail.png'
    },
    summary: {
      type: DataTypes.STRING,
      defaultValue: '줄거리를 제공하지 않는 컨텐츠입니다.'
    },
    pubDate: {
      type: DataTypes.STRING,
      defaultValue: '정보없음'
    },
    director: {
      type: DataTypes.STRING,
      defaultValue: '정보없음'
    },
    actor: {
      type: DataTypes.STRING,
      defaultValue: '정보없음'
    },
    memoNum: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'videos',
  });
  return videos;
};