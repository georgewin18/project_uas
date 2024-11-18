import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./elements/LandingPage";

import EmployeesHome from "./elements/employees/Home";
import EmployeesCreate from "./elements/employees/Create";
import EmployeesUpdate from "./elements/employees/Update";
import EmployeesRead from "./elements/employees/Read";

import AttendanceHome from "./elements/attendance/Home";
import AttendanceCreate from "./elements/attendance/Create";

import LeaveApplicationHome from "./elements/leave_application/Home";
import LeaveApplicationCreate from "./elements/leave_application/Create";
import LeaveApplicationUpdate from "./elements/leave_application/Update";

import SalaryHome from "./elements/salary/Home";
import SalaryCreate from "./elements/salary/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/employees" element={<EmployeesHome />} />
        <Route path="/employees/create" element={<EmployeesCreate />} />
        <Route path="/employees/update/:id" element={<EmployeesUpdate />} />
        <Route path="/employees/read/:id" element={<EmployeesRead />} />
      
        <Route path="/attendance" element={<AttendanceHome />}/>
        <Route path="/attendance/create" element={<AttendanceCreate />} />

        <Route path="/leaveApplication" element={<LeaveApplicationHome />} />
        <Route path="/leaveApplication/create" element={<LeaveApplicationCreate />} />
        <Route path="/leaveApplication/update/:id" element={<LeaveApplicationUpdate />} />

        <Route path="/salary" element={<SalaryHome />} />
        <Route path="/salary/create" element={<SalaryCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;