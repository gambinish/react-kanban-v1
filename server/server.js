const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const Tickets = require('./db/models/Tickets.js')


app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  res.json('hello world')
})

app.get('/tickets', (req, res) => {
  // res.json({
  //   items: [{
  //     id: 1,
  //     name: 'A Large Healing Potion',
  //     weight: 0.1,
  //     type: 'consumable'
  //   },
  //   {
  //     id: 2,
  //     name: 'Wirts Leg',
  //     weight: 10,
  //     type: 'weapon'
  //   },
  //   {
  //     id: 3,
  //     name: 'Dreamwalker Spaulders',
  //     weight: 2,
  //     type: 'armor'
  //   }
  //   ]
  // })
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

