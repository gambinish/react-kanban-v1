const bookshelf = require('./bookshelf')

const Tickets = bookshelf.Model.extend({
  tableName: 'ticketsTable',
  hasTimestamps: true
})

module.exports = Tickets