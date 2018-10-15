
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticketsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticketsTable').insert([
        { name: 'postgres-A1', urgency: 1, description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', status: 'assigned' },
        { name: 'postgres-A2', urgency: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam.', status: 'assigned' },
        { name: 'postgres-A3', urgency: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed.', status: 'assigned' },
        { name: 'postgres-B1', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sapien.', status: 'active' },
        { name: 'postgres-B2', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in massa sollicitudin.', status: 'active' },
        { name: 'postgres-B3', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat bibendum viverra.', status: 'active' },
        { name: 'postgtres-C1', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit lorem vitae.', status: 'inReview' },
        { name: 'postgtres-C2', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit rhoncus arcu.', status: 'inReview' },
        { name: 'postgtres-C3', urgency: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper elit est.', status: 'inReview' }
      ]);
    });
};