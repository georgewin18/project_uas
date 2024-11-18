import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LeaveApplicationCreate() {
  const[values, setValues] = useState({
    employee_id: '',
    start_date: '',
    end_date: '',
    reason: ''
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    
    axios.post('/leaveApp', values)
    .then((res) => {
      navigate('/leaveApplication')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Add New Leave Application</h3>
          <Link to="/leaveApplication" className="btn btn-danger">Back</Link>
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
              <label htmlFor="start_date">Start Date:</label>
              <input 
                type="date" 
                id="start_date" 
                name="start_date" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, start_date: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="end_date">End Date:</label>
              <input 
                type="date" 
                id="end_date" 
                name="end_date" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, end_date: e.target.value })} 
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="reason">Reason:</label>
              <input 
                type="text" 
                id="reason" 
                name="reason" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, reason: e.target.value })} 
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

export default LeaveApplicationCreate