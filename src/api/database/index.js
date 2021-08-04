const knextfile = require('../../../knexfile')

const knex = require('knex')(knextfile.development)

module.exports = knex 