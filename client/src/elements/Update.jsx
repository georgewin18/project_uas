import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/employees/${id}`)
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [id]) 

  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault()
    
    data[0].birthdate = String(data[0].birthdate).slice(0, 10)
    data[0].hiredate = String(data[0].hiredate).slice(0, 10)

    axios.patch(`/employees/${id}`, data[0])
    .then((res) => {
      navigate('/')
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      console.log(data[0])
    })
  }

  return (
    <div className="container-fluid vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg" style={{ width: "50%", maxWidth: "600px" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Edit Employee {id}</h2>
          <Link to="/" className="btn btn-success">Back</Link>
        </div>
        <div className="card-body">
          {data.map((employee) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                  <label htmlFor="name"><b>Name:</b></label>
                  <input
                    value={employee.name}
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], name: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="email"><b>Email:</b></label>
                  <input
                    value={employee.email}
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], email: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="phone"><b>Phone:</b></label>
                  <input
                    value={employee.phone}
                    type="text"
                    name="phone"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], phone: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="address"><b>Address:</b></label>
                  <input
                    value={employee.address}
                    type="text"
                    name="address"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], address: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="birthdate"><b>Birth Date:</b></label>
                  <input
                    value={String(employee.birthdate).slice(0, 10)}
                    type="date"
                    name="birthdate"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], birthdate: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="hiredate"><b>Hire Date:</b></label>
                  <input
                    value={String(employee.hiredate).slice(0, 10)}
                    type="date"
                    name="hiredate"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], hiredate: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="job_id"><b>Job ID:</b></label>
                  <input
                    value={employee.job_id}
                    type="number"
                    name="job_id"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], job_id: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="department_id"><b>Department ID:</b></label>
                  <input
                    value={employee.department_id}
                    type="number"
                    name="department_id"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], department_id: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="salary"><b>Salary:</b></label>
                  <input
                    value={employee.salary}
                    type="number"
                    name="salary"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setData([{ ...data[0], salary: e.target.value }])
                    }
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="status"><b>Status:</b></label>
                  <input
                    value={employee.status}
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

export default Update