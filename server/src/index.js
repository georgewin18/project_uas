require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8888

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})