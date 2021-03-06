'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const { users, videos, users_videos, memos } = sequelize.models

users.belongsToMany(videos, { through: users_videos });
videos.belongsToMany(users, { through: users_videos });
users.belongsToMany(videos, { through: memos });
videos.belongsToMany(users, { through: memos });

users.hasMany(memos);
memos.belongsTo(users);
videos.hasMany(memos);
memos.belongsTo(videos);
videos.hasMany(users_videos);
users_videos.belongsTo(videos);

module.exports = db;
