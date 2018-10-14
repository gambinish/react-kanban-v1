
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticketsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticketsTable').insert([
        { name: 'postgres-A', type: 'drag', description: '', status: 'assigned' },
        { name: 'postgres-A2', type: 'drag', description: '', status: 'assigned' },
        { name: 'postgres-B', type: 'front end', description: '', status: 'active' },
        { name: 'postgtres-C', type: 'project management', description: '', status: 'inReview' }
      ]);
    });
};