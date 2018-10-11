
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticketsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticketsTable').insert([
        { name: 'item-A', type: 'back end', description: '', status: 'assigned' },
        { name: 'item-B', type: 'front end', description: '', status: 'active' },
        { name: 'item-C', type: 'project management', description: '', status: 'inReview' }
      ]);
    });
};