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
    
    axios.patch(`/employees/${id}`, data)
    .then((res) => {
      navigate('/')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container-fluid vw-100 vh-100">
      <h1>Employee {id}</h1>
      <Link to="/" className="btn btn-success">Back</Link>
      {data.map((employee) => {
        return (

          <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Name : </label>
            <input 
              value={employee.name}
              type="text" 
              name="name" 
              required
              onChange={(e) => setData([
                {...data, name: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email : </label>
            <input 
              value={employee.email}
              type="email" 
              name="email" 
              required
              onChange={(e) => setData([
                {...data, email: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="phone">Phone : </label>
            <input 
              value={employee.phone}
              type="text" 
              name="phone" 
              required
              onChange={(e) => setData([
                {...data, phone: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="address">Address : </label>
            <input 
              value={employee.address}
              type="text" 
              name="address"
              required 
              onChange={(e) => setData([
                {...data, address: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="birthdate">Birth Date : </label>
            <input 
              value={String(employee.birthdate).slice(0,10)}
              type="text" 
              name="birthdate" 
              required
              onChange={(e) => setData([
                {...data, birthdate: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="hiredate">Hire Date : </label>
            <input 
              value={String(employee.hiredate).slice(0,10)}
              type="text" 
              name="hiredate" 
              required
              onChange={(e) => setData([
                {...data, hiredate: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="job_id">Job ID : </label>
            <input 
              value={employee.job_id}
              type="number" 
              name="job_id" 
              required
              onChange={(e) => setData([
                {...data, job_id: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="department_id">Department ID : </label>
            <input 
              value={employee.department_id}
              type="number" 
              name="department_id" 
              required
              onChange={(e) => setData([
                {...data, department_id: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="salary">Salary : </label>
            <input 
              value={employee.salary}
              type="number" 
              name="salary" 
              required
              onChange={(e) => setData([
                {...data, salary: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <label htmlFor="status">Status : </label>
            <input 
              value={employee.status}
              type="text" 
              name="status" 
              required
              onChange={(e) => setData([
                {...data, status: e.target.value}
              ])} 
              />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
        )
      })}
      </div>
    )
}

export default Update