import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LeaveApplicationUpdate() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/leaveApp/${id}`)
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [id]) 

  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    
    data[0].start_date = String(data[0].start_date).slice(0, 10)
    data[0].end_date = String(data[0].end_date).slice(0, 10)

    axios.patch(`/leaveApp/${id}`, data[0])
    .then((res) => {
      navigate('/leaveApplication')
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      console.log(data[0])
    })
  }

  return (
    <div className="container-fluid vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg" style={{ width: "50%", maxWidth: "800px" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Edit Status</h2>
          <Link to="/leaveApplication" className="btn btn-danger">Back</Link>
        </div>
        <div className="card-body">
          {data.map((leaveApp) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                  <label htmlFor="name"><b>Employee ID:</b></label>
                  <input
                    value={leaveApp.employee_id}
                    type="number"
                    name="employee_id"
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="start_date"><b>Start Date:</b></label>
                  <input
                    value={String(leaveApp.start_date).slice(0, 10)}
                    type="date"
                    name="start_date"
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="end_date"><b>End Date:</b></label>
                  <input
                    value={String(leaveApp.end_date).slice(0, 10)}
                    type="date"
                    name="end_date"
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="reason"><b>Reason:</b></label>
                  <input
                    value={leaveApp.reason}
                    type="text"
                    name="reason"
                    className="form-control"
                    readOnly
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="status"><b>Status:</b></label>
                  <input
                    value={leaveApp.status}
                    type="text"
                    name="status"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], status: e.target.value }])
                    }
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-success mt-3">
                    Save
                  </button>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default LeaveApplicationUpdate