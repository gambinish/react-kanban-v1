const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')

const Tickets = require('./db/models/Tickets.js')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {

  Tickets
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.post('/', (req, res) => {

  const item = req.body
  console.log('SERVER POST: ', item)

  Tickets
    .forge(item)
    .save()
    .then(result => {
      return Tickets.fetchAll()
    })
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.put('/delete', (req, res) => {

  const id = req.body.id
  console.log('SERVER DELETE: ', req.body)

  Tickets
    .where({ id })
    .destroy()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('DELETE ERR: ', err)
    })

})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

