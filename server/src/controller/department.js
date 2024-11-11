const knex = require('../models/department')

const getAllDepartment = async (req, res) => {
  try {
    const data = await knex.getAllDepartment()
    res.json({
      message: "GET all departments success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getDepartmentById = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getDepartmentById(id)
    res.json({
      message: "GET department by ID success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewDepartment = async (req, res) => {
  const {body} = req

  if (!body.name || !body.manager_id) {
    res.status(400).json({
      message: "user input error"
    })
  }

  try {
    await knex.createNewDepartment(body)
    res.json({
      message: "CREATE new department success",
      data: body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateDepartment = async (req, res) => {
  const {body} = req
  const {id} = req.params

  if (!body.name || !body.manager_id) {
    res.status(400).json({
      message: "user input error"
    })
  }

  try {
    await knex.updateDepartment(body, id)
    res.json({
      message: "UPDATE department success",
      data: {
        id: id,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const deleteDepartment = async (req, res) => {
  const {id} = req.params

  try {
    await knex.deleteDepartment(id)
    res.json({
      message: "DELETE department success",
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllDepartment,
  getDepartmentById,
  createNewDepartment,
  updateDepartment,
  deleteDepartment
}