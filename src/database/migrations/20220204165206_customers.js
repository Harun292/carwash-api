
export const up = function(knex) {
    return knex.schema.createTable('customers', table => {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.integer('visits').notNullable();
        table.timestamps(true,true)
      });
};

export const down = function(knex) {
    return knex.schema.dropTable('customers');
};
