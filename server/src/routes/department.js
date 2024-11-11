const express = require('express')
const DepartmentController = require('../controller/department')
const router = express.Router()

router.get('/', DepartmentController.getAllDepartment)
router.get('/:id', DepartmentController.getDepartmentById)

router.post('/', DepartmentController.createNewDepartment)

router.patch('/:id', DepartmentController.updateDepartment)

router.delete('/:id', DepartmentController.deleteDepartment)

module.exports = router