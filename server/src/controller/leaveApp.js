const knex = require('../models/leaveApp')

const getAllLeaveApplication = async (req, res) => {
  try {
    const data = await knex.getAllLeaveApplication()
    res.json({
      message: "GET all leave application success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getLeaveApplicationById = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getLeaveApplicationById(id)
    res.json({
      message: "GET leave application by ID success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getLeaveApplicationByEmployeeId = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getLeaveApplicationByEmployeeId(id)
    res.json({
      message: "GET leave application by employee ID success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewLeaveApplication = async (req, res) => {
  const {body} = req

  if (!body.employee_id || !body.start_date || !body.end_date || !body.reason) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.createNewLeaveApplication(body)
    res.status(201).json({
      message: "CREATE new leave application success",
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateLeaveApplcation = async (req, res) => {
  const {body} = req
  const {id} = req.params

  if (!body.status) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.updateLeaveApplcation(body, id)
    res.status(201).json({
      message: "UPDATE leave application success",
      data: body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllLeaveApplication,
  getLeaveApplicationById,
  getLeaveApplicationByEmployeeId,
  createNewLeaveApplication,
  updateLeaveApplcation
}