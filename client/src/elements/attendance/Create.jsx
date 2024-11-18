import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AttendanceCreate() {
  const[values, setValues] = useState({
    employee_id: '',
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const employee_id = values.employee_id
    
    axios.post(`/attendance/${employee_id}`)
    .then((res) => {
      navigate('/attendance')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Add New Attendance</h3>
          <Link to="/attendance" className="btn btn-danger">Back</Link>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="employee_id">Employee ID:</label>
              <input 
                type="text" 
                id="employee_id" 
                name="employee_id" 
                required
                className="form-control"
                onChange={(e) => setValues({ ...values, employee_id: e.target.value })} 
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

export default AttendanceCreate