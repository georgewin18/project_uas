const bodyParser = require('body-parser')

const urlencoded = bodyParser.urlencoded({
  extended: true
})

const json = bodyParser.json({
  limit: '64mb'
})

module.exports = {
  urlencoded,
  json,
}