
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ticketsTable', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.string('description');
      table.string('status')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tickets')
  ]);
};