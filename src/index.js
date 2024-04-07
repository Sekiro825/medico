import ReactDOM from "react-dom/client";
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


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="patientdetails" element={<Patientdetails />} />
          <Route path="hospitalsignin" element={<Hospitalsignin />} />
          <Route path="hospitalreg" element={<Hospitalreg />} />
          <Route path="mainpg" element={<Mainpg />} />
          <Route path="profilepg" element={<Profilepg />} />
          <Route path="medhistory" element={<Medhistory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="staff" element={<Staff />} />

        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);