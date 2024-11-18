import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AttendanceHome() {
  const [data, setData] = useState([])
  const [updated, setUpdated] = useState(true)

  useEffect(() => {
    if (updated) {
      setUpdated(false)

      axios.get('/attendance')
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => console.log(err))
    }
  }, [updated])

  function handleLogOut(id) {
    axios.patch(`/attendance/${id}`)
    .then((res) => {
      setUpdated(true)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container-fluid my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Attendance</h3>
          <div>
            <Link className="btn btn-success" to="./create">
              Add Attendance +
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
                  <th>Date</th>
                  <th>Entry Time</th>
                  <th>Out Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((attendance) => (
                  <tr key={attendance.id}>
                    <td>{attendance.employee_id}</td>
                    <td>{String(attendance.date).slice(0, 10)}</td>
                    <td>{attendance.entry_time}</td>
                    <td>{attendance.out_time}</td>
                    <td>{attendance.status}</td>
                    <td>
                      <div className="d-flex">
                        <button
                          onClick={() => handleLogOut(attendance.employee_id)}
                          className="btn btn-primary btn-sm mx-1"
                        >
                          Log Out
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

export default AttendanceHome