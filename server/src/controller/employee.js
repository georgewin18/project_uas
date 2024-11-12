const knex = require('../models/employee')

const getAllEmployee = async (req, res) => {
  try {
    const data = await knex.getAllEmployee()
    res.json({
      message : "GET all employees success",
      data : data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getEmployeeById = async (req, res) => {
  const {id} = req.params
  
  try {
    const data = await knex.getEmployeeById(id)
    res.json({
      messsage: "GET employee by ID success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getEmployeeByDepartmentId = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getEmployeeByDepartmentId(id)
    res.json({
      messsage: "GET employee by Department ID success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getEmployeeByJobId = async (req,res) => {
  const {id} = req.params

  try {
    const data = await knex.getEmployeeByJobId(id)
    res.json({
      messsage: "GET employee by Job ID success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewEmployee = async (req, res) => {
  const {body} = req

  if (!body.name || !body.email || !body.phone || !body.address 
      || !body.birthdate || !body.hiredate || !body.job_id 
      || !body.department_id || !body.salary || !body.status) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.createNewEmployee(body)
    res.status(201).json({
      message: "CREATE new employee success",
      data: body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateEmployee = async (req, res) => {
  const {id} = req.params
  const {body} = req

  if (!body.name || !body.email || !body.phone || !body.address 
    || !body.birthdate || !body.hiredate || !body.job_id 
    || !body.department_id || !body.salary || !body.status) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.updateEmployee(body, id)
    res.status(201).json({
      message: "UPDATE employee success",
      data: {
        id: id,
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const deleteEmployee = async (req, res) => {
  const {id} = req.params

  try {
    await knex.deleteEmployee(id)
    res.json({
      message: 'DELETE employee success',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllEmployee,
  getEmployeeById,
  getEmployeeByDepartmentId,
  getEmployeeByJobId,
  createNewEmployee,
  updateEmployee,
  deleteEmployee
}