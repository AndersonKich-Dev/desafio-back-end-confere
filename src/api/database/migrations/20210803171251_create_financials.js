
exports.up = function(knex) {
    return knex.schema.createTable('financials', table => {
      table.increments('id').primary(),
      table.timestamp('received_date').notNullable(),
      table.enu('status', ['EXPECTED', 'RECEIVED']).notNullable(),
     
      table.string('transaction_id').references('id').inTable('transaction');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('financials')
  };
