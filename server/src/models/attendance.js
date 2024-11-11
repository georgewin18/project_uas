const knex = require('../config/database')
const moment = require('moment')

const getAllAttendance = () => {
  return knex('attendance')
}

const getAttendanceById = (id) => {
  return knex('attendance').where('id', id)
} 

const getAttendanceByEmployeeId = (empId) => {
  return knex('attendance').where('employee_id', empId)
}

const createNewAttendance = (id) => {
  const insert = knex('attendance').insert({
    "employee_id": id,
    "date": new Date().toJSON().slice(0,10), 
    "entry_time": new Date().toJSON().slice(11, 19)
  })
  return insert
}

const updateAttendance = (id, workDuration) => {
  let status = "hadir"
  if (workDuration < 8) {
    status = "alpha"
  }

  const update = knex('attendance').where('id', id).update({
    "out_time": new Date().toJSON().slice(11, 19),
    "status": status
  })
  return update
}

const getEmployeeCurrentAttendance = (empId) => {
  const attendanceId = knex.select('id').from('attendance').where('employee_id', empId).orderBy('id', 'desc').limit(1)
  return attendanceId
}

const getEntryTime = (id) => {
  const entryTime = knex.select('entry_time').from('attendance').where('id', id)
  return entryTime
}

const getOutTime = (id) => {
  const outTime = knex.select('out_time').from('attendance').where('id', id)
  return outTime
}

const getEntryOutTimeDifference = (entryTime) => {
  const outTime = new Date().toJSON().slice(11, 19)

  const entry = moment(entryTime, "HH:mm:ss")
  const out = moment(outTime, "HH:mm:ss")

  const duration = moment.duration(out - entry)
  const result = duration.as('hours')

  return result
}

module.exports = {
  getAllAttendance,
  getAttendanceById,
  getAttendanceByEmployeeId,
  createNewAttendance,
  updateAttendance,
  getEmployeeCurrentAttendance,
  getEntryTime,
  getOutTime,
  getEntryOutTimeDifference
}

