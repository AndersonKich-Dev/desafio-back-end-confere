
exports.up = function(knex) {
    return knex.schema.createTable('card', table => {
        table.string('id').primary(),
        table.string('number', 4).notNullable(),
        table.string('exipiry').notNullable(),
        table.string('cvv', 3).notNullable(),
        table.string('holder').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('card')
};
