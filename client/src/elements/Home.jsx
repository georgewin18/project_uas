import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)

  useEffect(() => {
    if (deleted) {
      setDeleted(false)
      
      axios.get('/employees')
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => console.log(err))
    }
  }, [deleted])

  function handleDelete(id) {
    axios.delete(`/employees/${id}`)
    .then((res) => {
      setDeleted(true)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container-fluid my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Employees</h3>
          <Link className="btn btn-success" to="/create">
            Add Employee +
          </Link>
        </div>
        <div className="card-body p-3">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Birth Date</th>
                  <th>Hire Date</th>
                  <th>Job ID</th>
                  <th>Department ID</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>{String(employee.birthdate).slice(0, 10)}</td>
                    <td>{String(employee.hiredate).slice(0, 10)}</td>
                    <td>{employee.job_id}</td>
                    <td>{employee.department_id}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.status}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          className="btn btn-info btn-sm mx-1"
                          to={`./read/${employee.id}`}
                        >
                          Read
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm mx-1"
                          to={`./update/${employee.id}`}
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="btn btn-danger btn-sm mx-1"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home