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
  console.log('SERVER POST "/" : ', req.body)
  const item = req.body

  Tickets
    .forge(item)
    .save()
    .then(result => {
      return Tickets.fetchAll()
    })
    .then(items => {
      res.json(items.serialize())
      // console.log('items after post: ', updatedList)
    })
    .catch(err => {
      console.log('err: ', err)
    })

})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

