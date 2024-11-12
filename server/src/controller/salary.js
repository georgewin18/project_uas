const knex = require('../models/salary')

const getAllSalary = async (req, res) => {
  try {
    const data = await knex.getAllSalary()
    res.json({
      message: "GET all salary success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getSalaryById = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getSalaryById(id)
    res.json({
      message: "GET salary by ID success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getSalaryByEmployeeId = async (req, res) => {
  const {id} = req.params
  
  try {
    const data = await knex.getSalaryByEmployeeId(id)
    res.json({
      message: "GET salary by employee ID success",
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewSalary = async (req, res) => {
  const {body} = req

  if (!body.employee_id || !body.month || !body.salary || !body.deduction || !body.allowance) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.createNewSalary(body)
    res.status(201).json({
      message: "CREATE new salary success",
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
  getAllSalary,
  getSalaryById,
  getSalaryByEmployeeId,
  createNewSalary
}