const express = require('express')
const AttendanceController = require('../controller/attendance')
const router = express.Router()

router.get('/', AttendanceController.getAllAttendance)
router.get('/:id', AttendanceController.getAttendanceById)
router.get('/employee/:id', AttendanceController.getAttendanceByEmployeeId)

router.post('/:id', AttendanceController.createNewAttendance)

router.patch('/:id', AttendanceController.updateAttendance)

module.exports = router