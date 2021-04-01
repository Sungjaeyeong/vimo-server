const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: 'vimo',
    dialect: 'mysql',
    logging: false
  },
  test: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: 'vimo_test',
    dialect: 'mysql',
    logging: false
  }
}

module.exports = config;
