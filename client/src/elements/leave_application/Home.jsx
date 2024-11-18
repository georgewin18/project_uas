import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function LeaveApplicationHome() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/leaveApp')
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [])


  return (
    <div className="container-fluid my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Leave Application</h3>
          <div>
            <Link className="btn btn-success" to="./create">
              Create Leave Application +
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
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((leaveApp) => (
                  <tr key={leaveApp.id}>
                    <td>{leaveApp.employee_id}</td>
                    <td>{String(leaveApp.start_date).slice(0, 10)}</td>
                    <td>{String(leaveApp.end_date).slice(0, 10)}</td>
                    <td>{leaveApp.reason}</td>
                    <td>{leaveApp.status}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          className="btn btn-primary btn-sm mx-1"
                          to={`./update/${leaveApp.id}`}
                        >
                          Update
                        </Link>
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

export default LeaveApplicationHome