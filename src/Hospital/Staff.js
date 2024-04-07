import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../connection";

const Staff = () => {
  const S_F_name = useRef();
  const S_L_name = useRef();
  const S_phone = useRef();
  const S_Address1 = useRef();
  const S_Address2 = useRef();
  const S_email  = useRef();
  const S_city = useRef();
  const S_state = useRef();
  const S_zip = useRef();
  const S_Age = useRef();
  const S_Date_ob =useRef();
  const Salary = useRef();
  const S_adhaar = useRef();
  const Designation = useRef();
  const S_gender = useRef();
  const dbRef = collection(db, "users");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addDoc(dbRef, {
        S_F_name: S_F_name.current.value,
        S_L_name: S_L_name.current.value,
        S_phone: S_phone.current.value,
        S_Address1: S_Address1.current.value,
        S_Address2: S_Address2.current.value,
        S_email: S_email.current.value,
        S_city: S_city.current.value,
        S_state: S_state.current.value,
        S_zip: S_zip.current.value,
        S_Age: S_Age.current.value,
        S_Date_ob: S_Date_ob.current.value,
        Salary: Salary.current.value,
        S_adhaar: S_adhaar.current.value,
        Designation: Designation.current.value,
      });
    } catch (e) {
      console.log(e);
    }
  };
    return (
      <>
      <div className="text-center">
       <h5>Welcome to Medico!</h5>
       <p> To ensure we provide you with the best possible healthcare experience, we kindly request you to complete your profile by filling out some essential personal details.</p>
       <p> Your information is crucial for tailoring our services to meet your unique needs and preferences.</p>
       <p>Rest assured that we treat your information with the utmost confidentiality and follow strict security measures to safeguard your privacy.</p>
       <p>By completing your profile, you empower us to offer you a more personalized and effective healthcare experience. Thank you for your cooperation in building a healthier and happier you!</p>
       <h5>Enter Staff Details....</h5>
       </div>
       <form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" formMethod="post" ref={S_F_name} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" formMethod="post" ref={S_L_name} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault03" className="form-label">Phone Number</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">91+</span>
      <input type="text" className="form-control" id="validationDefault03" aria-describedby="inputGroupPrepend2" formMethod="post" ref={S_phone} required/>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationDefault04" className="form-label">Address1</label>
    <input type="text" className="form-control" id="validationDefault04" formMethod="post" ref={S_Address1}required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault05" className="form-label">Address2</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={S_Address2}required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault07" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault07" formMethod="post" ref={S_city}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault08" className="form-label">State</label>
    <select className="form-select" id="validationDefault08" formMethod="post" ref={S_state}required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={S_zip}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault09" className="form-label">Adhaar Number</label>
    <input type="text" className="form-control" id="validationDefault09" formMethod="post" ref={S_adhaar}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault10" className="form-label">Designation</label>
    <select className="form-select" id="validationDefault10" formMethod="post" ref={Designation}required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Gender</label>
    <select className="form-select" id="validationDefault04"formMethod="post" ref={S_gender} required>
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
    <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Date.Of.birth</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Salary</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Resume</label>
    <input type="file" className="form-control" aria-label="Resume" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Adhaar-Card</label>
    <input type="file" className="form-control" aria-label="Adhaar-Card" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Pan-Card</label>
    <input type="file" className="form-control" aria-label="Pan-Card" required/>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <Link to="/mainpg" className="btn btn-primary" >All Done!</Link>
  </div>
</form>
</>
    );
  };
  
  export default Staff;