import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SalaryCreate() {
  const[values, setValues] = useState({
    employee_id: '',
    month: '',
    salary: '',
    deduction: '',
    allowance: ''
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(values)
    
    axios.post('/salary', values)
    .then((res) => {
      navigate('/salary')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Add New Salary</h3>
          <Link to="/salary" className="btn btn-danger">Back</Link>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="employee_id">Employee ID:</label>
              <input 
                type="number" 
                id="employee_id" 
                name="employee_id" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, employee_id: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="month">Month:</label>
              <input 
                type="date" 
                id="month" 
                name="month" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, month: e.target.value })} 
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
            <div className="form-group my-3">
              <label htmlFor="deduction">Deduction:</label>
              <input 
                type="number" 
                id="deduction" 
                name="deduction" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, deduction: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="allowance">Allowance:</label>
              <input 
                type="number" 
                id="allowance" 
                name="allowance" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, allowance: e.target.value })} 
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

export default SalaryCreate