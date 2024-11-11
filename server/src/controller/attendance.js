const { default: next } = require('next')
const knex = require('../models/attendance')

const getAllAttendance = async (req, res) => {
  try {
    const data = await knex.getAllAttendance()
    res.json({
      message: "GET all attendance success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getAttendanceById = async (req, res) => {
  const {id} = req.params

  try {
    const data = await knex.getAttendanceById(id)
    res.json({
      message: "GET attendance by ID success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const getAttendanceByEmployeeId = async (req, res) => {
  const {id} = req.params
  
  try {
    const data = await knex.getAttendanceByEmployeeId(id)
    res.json({
      message: "GET attendance by employee_id success",
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const createNewAttendance = async (req, res) => {
  const {id} = req.params

  try {
    await knex.createNewAttendance(id)
    res.status(201).json({
      message: "CREATE new attendance success",
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

const updateAttendance = async (req, res, next) => {
  const {id} = req.params
  const currentAttendance = await knex.getEmployeeCurrentAttendance(id)
  const attendanceId = currentAttendance[0].id

  const outTime = await knex.getOutTime(attendanceId)
  if (outTime[0].out_time !== null) {
    res.status(400).json({
      message: "employee has logged out"
    })
    return
  }

  const entryTime = await knex.getEntryTime(attendanceId)
  const entry = entryTime[0].entry_time
  const workDuration = await knex.getEntryOutTimeDifference(entry)

  try {
    await knex.updateAttendance(attendanceId, workDuration)
    res.status(201).json({
      message: "Attendance recorded",
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    })
  }
}

module.exports = {
  getAllAttendance,
  getAttendanceById,
  getAttendanceByEmployeeId,
  createNewAttendance,
  updateAttendance
}