import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const[values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthdate: '',
    hiredate: '',
    job_id: '',
    department_id: '',
    salary: ''
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    
    axios.post('/employees', values)
    .then((res) => {
      navigate('/')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Add New Employee</h3>
          <Link to="/" className="btn btn-success">Home</Link>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, name: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, email: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="phone">Phone:</label>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, phone: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="address">Address:</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, address: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="birthdate">Birth Date:</label>
              <input 
                type="date" 
                id="birthdate" 
                name="birthdate" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, birthdate: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="hiredate">Hire Date:</label>
              <input 
                type="date" 
                id="hiredate" 
                name="hiredate" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, hiredate: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="job_id">Job ID:</label>
              <input 
                type="number" 
                id="job_id" 
                name="job_id" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, job_id: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="department_id">Department ID:</label>
              <input 
                type="number" 
                id="department_id" 
                name="department_id" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, department_id: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="salary">Salary:</label>
              <input 
                type="number" 
                id="salary" 
                name="salary" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, salary: e.target.value })} 
              />
            </div>
            <div className="form-group my-3 text-end">
              <button type="submit" className="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create