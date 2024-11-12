const express = require('express')
const SalaryController = require('../controller/salary')
const router = express.Router()

router.get('/', SalaryController.getAllSalary)
router.get('/:id', SalaryController.getSalaryById)
router.get('/employee/:id', SalaryController.getSalaryByEmployeeId)

router.post('/', SalaryController.createNewSalary)

module.exports = router