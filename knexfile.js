require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.CLIENT,
      password: process.env.PASSWORD
    },
    migrations:{
      directory: './src/api/database/migrations'
    },
  },

};
