const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const Tickets = require('./db/models/Tickets.js')
const cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, '../build')))

// app.get('/', (req, res) => {
//   res.json('hello world')
// })

app.get('/', (req, res) => {

  Tickets
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
      console.log('items: ', items)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

