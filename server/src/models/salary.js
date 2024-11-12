const knex = require('../config/database')

const getAllSalary = () => {
  return knex('salary')
}

const getSalaryById = (id) => {
  return knex('salary').where('id', id)
}

const getSalaryByEmployeeId = (empId) => {
  return knex('salary').where('employee_id', empId)
}

const createNewSalary = (body) => {
  const insert = knex('salary').insert({
    "employee_id": body.employee_id,
    "month": body.month,
    "salary": body.salary,
    "deduction": body.deduction,
    "allowance": body.allowance,
    "total_salary": (body.salary - body.deduction + body.allowance)
  })
  return insert
}

module.exports = {
  getAllSalary,
  getSalaryById,
  getSalaryByEmployeeId,
  createNewSalary
}