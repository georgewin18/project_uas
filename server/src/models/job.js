const knex = require('../config/database')

const getAllJob = () => {
  return knex('jobs')
}

const getJobById = (id) => {
  return knex('jobs').where('id', id)
}

const createNewJob = (body) => {
  const insert = knex('jobs').insrt({
    "title": body.title,
    "min_salary": body.min_salary,
    "max_salary": body.max_salary
  })
  return insert
}

const updateJob = (body, id) => {
  const update = knex('jobs').where('id', id).update({
    "title": body.title,
    "min_salary": body.min_salary,
    "max_salary": body.max_salary
  })
  return update
}

const deleteJob = (id) => {
  return knex('jobs').where('id', id).del()
}

module.exports = {
  getAllJob,
  getJobById,
  createNewJob,
  updateJob,
  deleteJob
}