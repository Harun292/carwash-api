
export const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test@test.com',password:'test1234',firstName:'Test',lastName:'Test'},
      ]);
    });
};
