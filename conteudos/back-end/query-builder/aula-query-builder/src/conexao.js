const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '18020526',
      database : 'knexjs'
    }
  });

module.exports = knex;