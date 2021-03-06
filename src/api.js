const express = require('express')
const serverless = require('serverless-http')
const app = express()

const router = express.Router()

app.use(express.static(__dirname + '/public'))

router.get('/', (req, res) => {
  res.json({
    'hello': 'hi!'
  })
})

router.get('/test', (req, res) => {
  res.json({
    'hello': 'goodbye!'
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)