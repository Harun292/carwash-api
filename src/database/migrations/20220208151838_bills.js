export const up = function (knex) {
    return knex.schema.createTable('bills', table => {
      table.increments('id').primary();
      table.string('programs').notNullable();
      table.integer('customer_id')
      .references('customers.id')
      .notNullable()
      .onDelete('CASCADE')
      .index();
      table.decimal('price').notNullable();
      table.timestamps(true,true)
    });
  };
  
  export const down = function (knex) {
    return knex.schema.dropTable('bills');
  };
  