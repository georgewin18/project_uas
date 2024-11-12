const express = require('express')
const LeaveApplicationController = require('../controller/leaveApp')
const router = express.Router()

router.get('/', LeaveApplicationController.getAllLeaveApplication)
router.get('/:id', LeaveApplicationController.getLeaveApplicationById)
router.get('/employee/:id', LeaveApplicationController.getLeaveApplicationByEmployeeId)

router.post('/', LeaveApplicationController.createNewLeaveApplication)

router.patch('/:id', LeaveApplicationController.updateLeaveApplcation)

module.exports = router