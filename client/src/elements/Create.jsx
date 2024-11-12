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
    <div className="container vh-100 vw-100">
      <div className="row">
        <h3>Add Student</h3>
        <div className="d-flex justify-content-end">
          <Link to='/' className="btn btn-success">Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" onChange={(e) => setValues({...values, name: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" onChange={(e) => setValues({...values, email: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="phone">Phone : </label>
            <input type="text" name="phone" onChange={(e) => setValues({...values, phone: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="address">Address : </label>
            <input type="text" name="address" onChange={(e) => setValues({...values, address: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="birthdate">Birth Date : </label>
            <input type="text" name="birthdate" onChange={(e) => setValues({...values, birthdate: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="hiredate">Hire Date : </label>
            <input type="text" name="hiredate" onChange={(e) => setValues({...values, hiredate: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="job_id">Job ID : </label>
            <input type="number" name="job_id" onChange={(e) => setValues({...values, job_id: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="department_id">Department ID : </label>
            <input type="number" name="department_id" onChange={(e) => setValues({...values, department_id: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="salary">Salary : </label>
            <input type="number" name="salary" onChange={(e) => setValues({...values, salary: e.target.value})} />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create