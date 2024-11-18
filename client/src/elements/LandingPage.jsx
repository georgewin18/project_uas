import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="mb-5 fw-bold text-center">
        Welcome to Employee Management System
      </h1>
      <div className="row w-75">
        {/* Button Wrapper */}
        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <Link
            to="/employees"
            className="btn btn-primary shadow rounded text-center"
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            Employees
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <Link
            to="/attendance"
            className="btn btn-success shadow rounded text-center"
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            Attendance
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <Link
            to="/salary"
            className="btn btn-warning shadow rounded text-center"
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            Salary
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <Link
            to="/leaveApplication"
            className="btn btn-danger shadow rounded text-center"
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
            }}
          >
            Leave Application
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
