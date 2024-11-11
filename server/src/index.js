require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const bodyParser = require('./middleware/bodyparser')

const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')

app.use(express.json())
app.use(bodyParser.urlencoded)
app.use(bodyParser.json)

app.use('/employees', employeeRoutes)
app.use('/departments', departmentRoutes)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})