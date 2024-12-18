require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const bodyParser = require('./middleware/bodyparser')
const cors = require('cors')

const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')
const jobRoutes = require('./routes/job')
const attendanceRoutes = require('./routes/attendance')
const salaryRoutes = require('./routes/salary')
const leaveAppRoutes = require('./routes/leaveApp')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded)
app.use(bodyParser.json)

app.use('/employees', employeeRoutes)
app.use('/departments', departmentRoutes)
app.use('/jobs', jobRoutes)
app.use('/attendance', attendanceRoutes)
app.use('/salary', salaryRoutes)
app.use('/leaveApp', leaveAppRoutes)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})