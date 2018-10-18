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

app.put('/delete', (req, res) => {
  console.log('SERVER DELETE "/delete" : ', req.body)
  // console.log('SERVER DELETE RES: ', res)
  const id = req.body.id
  console.log('DELETE ID: ', id)
  console.log('typeof DELETE ID: ', typeof id)
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

