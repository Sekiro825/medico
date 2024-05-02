import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Patients/Layout";
import Home from "./Patients/Home";
import Blogs from "./Patients/Blogs";
import Contact from "./Patients/Contact";
import Register from "./Patients/Register";
import Patientdetails from "./Patients/Patientdetails";
import Hospitalsignin from "./Hospital/Hospitalsignin";
import Hospitalreg from "./Hospital/Hospitalreg";
import Mainpg from "./Hospital/Mainpg";
import Medhistory from "./Patients/Medhistory";
import Profilepg from "./Patients/Profilepg";
import Reports from "./Patients/Reports";
import Staff from "./Hospital/Staff";
import DisplayData from "./Patients/displaydata";
import HospitalDisplay from "./Hospital/hospitaldisplay";
import UserDetails from "./Hospital/hospitaldisplay";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <>
          <Route
            index
            element={<Home/>}
          />
          <Route
            path="/"
            element={<Layout />}
          />
          <Route
            path="/blogs"
            element={<Blogs />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/patientdetails"
            element={<Patientdetails />}
          />
          <Route
            path="/hospitalsignin"
            element={<Hospitalsignin />}
          />
          <Route
            path="/hospitalreg"
            element={<Hospitalreg />}
          />
          <Route
            path="/mainpg"
            element={<Mainpg />}
          />
          <Route
            path="/profilepg"
            element={<Profilepg />}
          />
          <Route
            path="/medhistory"
            element={<Medhistory />}
          />
          <Route
            path="/reports"
            element={<Reports />}
          />
          <Route
            path="/staff"
            element={<Staff />}
          />
          <Route
            path="/displaydata"
            element={<DisplayData />}
          />
          <Route
            path="/hospitaldisplay"
            element={<HospitalDisplay />}
          />
          <Route path="/hospitaldisplay/user1" element={<UserDetails/>}/>
          <Route path="/hospitaldisplay/user2" element={<UserDetails/>}/>
          <Route path="/hospitaldisplay/user3" element={<UserDetails/>}/>
          <Route path="/hospitaldisplay/user4" element={<UserDetails/>}/>
        </>
      </Routes>
    </BrowserRouter>
  );
}
