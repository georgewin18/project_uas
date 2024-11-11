const express = require('express')
const JobController = require('../controller/job')
const router = express.Router()

router.get('/', JobController.getAllJob)
router.get('/:id', JobController.getJobById)

router.post('/', JobController.createNewJob)

router.patch('/:id', JobController.updateJob)

router.delete('/:id', JobController.deleteJob)

module.exports = router