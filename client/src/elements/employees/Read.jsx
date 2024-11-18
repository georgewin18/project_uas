import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmployeesRead() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/employees/${id}`)
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [id])

  return (
    <div className="container-fluid vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg w-50">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Employee {id}</h1>
          <Link to="/employees" className="btn btn-success">Back</Link>
        </div>
        <div className="card-body">
          {data.map((employee) => {
            return (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>ID:</b> {employee.id}
                </li>
                <li className="list-group-item">
                  <b>Name:</b> {employee.name}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Phone:</b> {employee.phone}
                </li>
                <li className="list-group-item">
                  <b>Address:</b> {employee.address}
                </li>
                <li className="list-group-item">
                  <b>Birth Date:</b> {String(employee.birthdate).slice(0, 10)}
                </li>
                <li className="list-group-item">
                  <b>Hire Date:</b> {String(employee.hiredate).slice(0, 10)}
                </li>
                <li className="list-group-item">
                  <b>Job ID:</b> {employee.job_id}
                </li>
                <li className="list-group-item">
                  <b>Department ID:</b> {employee.department_id}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b> {employee.salary}
                </li>
                <li className="list-group-item">
                  <b>Status:</b> {employee.status}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default EmployeesRead