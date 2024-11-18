const knex = require('../config/database')

const getAllEmployee = () => {
  return knex('employees')
}

const getEmployeeById = (id) => {
  return knex('employees').where('id', id)
}

const getEmployeeByDepartmentId = (deptId) => {
  return knex('employees').where('department_id', deptId)
}

const getEmployeeByJobId = (jobId) => {
  return knex('employees').where('job_id', jobId)
}

const createNewEmployee = (body) => {
  const insert = knex('employees').insert({
    "name": body.name,
    "email": body.email,
    "phone" : body.phone,
    "address" : body.address,
    "birthdate" : body.birthdate,
    "hiredate" : body.hiredate,
    "job_id" : body.job_id,
    "department_id" : body.department_id,
    "salary" : body.salary,
    "status" : "aktif"
  })
  return insert
}

const updateEmployee = (body, id) => {
  const update = knex('employees').where('id', id).update({
    "name": body.name,
    "email": body.email,
    "phone" : body.phone,
    "address" : body.address,
    "birthdate" : body.birthdate,
    "hiredate" : body.hiredate,
    "job_id" : body.job_id,
    "department_id" : body.department_id,
    "salary" : body.salary,
    "status" : body.status
  })
  return update
}

const deleteEmployee = (id) => {
  return knex('employees').where('id', id).del()
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