import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('/employees')
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='container-fluid'>
      <table>
        <thead>
          <tr>
            <th className='px-3'>ID</th>
            <th className='px-3'>Name</th>
            <th className='px-3'>Email</th>
            <th className='px-3'>Phone</th>
            <th className='px-3'>Address</th>
            <th className='px-3'>Birth Date</th>
            <th className='px-3'>Hire Date</th>
            <th className='px-3'>Job ID</th>
            <th className='px-3'>Department ID</th>
            <th className='px-3'>Salary</th>
            <th className='px-3'>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((employee) => {
              return (
                <tr>
                  <td className='px-3'>{employee.id}</td>
                  <td className='px-3'>{employee.name}</td>
                  <td className='px-3'>{employee.email}</td>
                  <td className='px-3'>{employee.phone}</td>
                  <td className='px-3'>{employee.address}</td>
                  <td className='px-3'>{String(employee.birthdate).slice(0,10)}</td>
                  <td className='px-3'>{String(employee.hiredate).slice(0,10)}</td>
                  <td className='px-3'>{employee.job_id}</td>
                  <td className='px-3'>{employee.department_id}</td>
                  <td className='px-3'>{employee.salary}</td>
                  <td className='px-3'>{employee.status}</td>
                  <td className='px-3'>
                    <Link className='btn btn-success mx-2' to={`./read/${employee.id}`}>Read</Link>
                    <Link className='btn btn-success mx-2' to={`./update/${employee.id}`}>Update</Link>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home