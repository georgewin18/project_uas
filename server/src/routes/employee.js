const express = require('express')
const EmployeeController = require ('../controller/employee')
const router = express.Router()

router.get('/', EmployeeController.getAllEmployee)
router.get('/:id', EmployeeController.getEmployeeById)
router.get('/department/:id', EmployeeController.getEmployeeByDepartmentId)
router.get('/job/:id', EmployeeController.getEmployeeByJobId)

router.post('/', EmployeeController.createNewEmployee)

router.patch('/:id', EmployeeController.updateEmployee)

router.delete('/:id', EmployeeController.deleteEmployee)

module.exports = router