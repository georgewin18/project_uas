require('dotenv').config()

const knex = require('knex')({
  client : 'mysql',
  connection : {
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
  }
})

module.exports = knex