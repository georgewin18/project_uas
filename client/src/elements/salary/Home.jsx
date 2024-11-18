import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SalaryHome() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/salary')
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container-fluid my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Employees Salary</h3>
          <div>
            <Link className="btn btn-success" to="./create">
              Add Salary +
            </Link>
            <Link className="btn btn-success m-2" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Employee ID</th>
                  <th>Month</th>
                  <th>Salary</th>
                  <th>Deduction</th>
                  <th>Allowance</th>
                  <th>Total Salary</th>
                </tr>
              </thead>
              <tbody>
                {data.map((salary) => (
                  <tr key={salary.id}>
                    <td>{salary.employee_id}</td>
                    <td>{String(salary.month).slice(0, 7)}</td>
                    <td>Rp {salary.salary}</td>
                    <td>Rp {salary.deduction}</td>
                    <td>Rp {salary.allowance}</td>
                    <td>Rp {salary.total_salary}</td>
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

export default SalaryHome