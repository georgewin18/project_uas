const knex = require('../models/job')

const getAllJob = async (req, res) => {
  try {
    const data = await knex.getAllJob()
    res.json({
      message : "GET all jobs success",
      data : data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getJobById = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getJobById(id)
    res.json({
      message: "GET job by ID success",
      data : data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewJob = async (req, res) => {
  const {body} = req

  if (!body.salary || !body.min_salary || !body.max.salary) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.createNewJob(body)
    res.status(201).json({
      message: "CREATE new job success",
      data : body,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateJob = async (req, res) => {
  const {body} = req
  const {id} = req.params

  if (!body.salary || !body.min_salary || !body.max.salary) {
    res.status(400).json({
      message: "user input error"
    })
    return
  }

  try {
    await knex.updateJob(body, id)
    res.status(201).json({
      message: "UPDATE job success",
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

const deleteJob = async (req, res) => {
  const {id} = req.params
  
  try {
    await knex.deleteJob(id)
    res.json({
      message: "DELETE job success"
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllJob,
  getJobById,
  createNewJob,
  updateJob,
  deleteJob
}