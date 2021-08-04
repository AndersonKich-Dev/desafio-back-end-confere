
exports.up = function(knex) {
    return knex.schema.createTable('transaction', table => {
      table.string('id').primary(),
      table.float('value').notNullable(),
      table.string('description').notNullable(),
      table.enu('type', ['DEBIT', 'CREDIT', 'INSTALLMENT_CREDIT']).notNullable(),
      table.integer('installments'),
      table.string('card_id').references('id').inTable('card').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transaction')
  };