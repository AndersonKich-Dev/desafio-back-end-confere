// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'conferedb',
      user:     'client',
      password: '123'
    },
    migrations:{
      directory: './src/api/database/migrations'
    },
  },

};
