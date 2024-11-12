const knex = require('../config/database')

const getAllLeaveApplication = () => {
  return knex('leave_application')
}

const getLeaveApplicationById = (id) => {
  return knex('leave_application').where('id', id)
}

const getLeaveApplicationByEmployeeId = (empId) => {
  return knex('leave_application').where('employee_id', empId)
}

const createNewLeaveApplication = (body) => {
  const insert = knex('leave_application').insert({
    "employee_id": body.employee_id,
    "start_date": body.start_date,
    "end_date": body.end_date,
    "reason": body.reason,
    "status": "pending"
  })
  return insert
}

const updateLeaveApplcation = (body, id) => {
  const update = knex('leave_application').where('id', id).update({
    "status": body.status
  })
  return update
}

module.exports = {
  getAllLeaveApplication,
  getLeaveApplicationById,
  getLeaveApplicationByEmployeeId,
  createNewLeaveApplication,
  updateLeaveApplcation
}