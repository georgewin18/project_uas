const knex = require('../config/database')

const getAllDepartment = () => {
  return knex('departments')
}

const getDepartmentById = (id) => {
  return knex('departments').where('id',  id)
}

const createNewDepartment = (body) => {
  const insert = knex('departments').insert({
    "name": body.name,
    "manager_id": body.manager_id
  })
  return insert;
}

const updateDepartment = (body, id) => {
  const update = knex('departments').where('id', id).update({
    "name": body.name,
    "manager_id": body.manager_id
  })
  return update
}

const deleteDepartment = (id) => {
  return knex('departments').where('id', id).del()
}

module.exports = {
  getAllDepartment,
  getDepartmentById,
  createNewDepartment,
  updateDepartment,
  deleteDepartment
}