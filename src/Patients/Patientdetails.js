import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../connection";


const Patientdetails = () => {

  const F_name = useRef();
  const L_name = useRef();
  const phone = useRef();
  const Address1 = useRef();
  const Address2 = useRef();
  const email  = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const Age = useRef();
  const Date_ob= useRef();
  const Occupation = useRef();
  const gender = useRef();
  const aadhaar = useRef();
  const  marital_s= useRef();
  const  Insurance_C= useRef();
  const  Insurance_id = useRef();
  const dbRef = collection(db, "users");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addDoc(dbRef, {
        F_name: F_name.current.value,
        L_name: L_name.current.value,
        phone: phone.current.value,
        Address1: Address1.current.value,
        Address2: Address2.current.value,
        email: email.current.value,
        city: city.current.value,
        state: state.current.value,
        zip: zip.current.value,
        Age: Age.current.value,
        Date_ob: Date_ob.current.value,
        Occupation: Occupation.current.value,
        gender: gender.current.value,
        aadhaar: aadhaar.current.value,
        marital_s: marital_s.current.value,
        Insurance_C: Insurance_C.current.value,
        Insurance_id: Insurance_id.current.value,
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
       <h5>Lets get your profile set up....</h5>
       </div>
       <form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" formMethod="post" ref={F_name}required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" formMethod="post" ref={L_name}required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault03" className="form-label">Phone Number</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">91+</span>
      <input type="text" className="form-control" id="validationDefault03" aria-describedby="inputGroupPrepend2" formMethod="post" ref={phone}required/>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationDefault04" className="form-label">Address1</label>
    <input type="text" className="form-control" id="validationDefault04" formMethod="post" ref={Address1} required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault05" className="form-label">Address2</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={Address2} required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault06" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault06" formMethod="post" ref={city}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" formMethod="post" ref={city} required>
      <option selected disabled value="">Choose...</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={zip}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Age</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={Age}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Date.Of.birth</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={Date_ob}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Occupation</label>
    <select className="form-select" id="validationDefault04" formMethod="post" ref={Occupation}required>
      <option selected disabled value="">Choose...</option>
      <option>army</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Gender</label>
    <select className="form-select" id="validationDefault04" formMethod="post" ref={gender}required>
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Adhaar Number</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={aadhaar} required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Marital Status</label>
    <select className="form-select" id="validationDefault04" formMethod="post" ref={marital_s}required>
      <option selected disabled value="">Choose...</option>
      <option>Single</option>
      <option>Married</option>
      <option>Divorced</option>
      <option>Seperated</option>
      <option>Domestic Partner</option>
    </select>
  </div>

  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Primary Insurance Carrier</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={Insurance_C}required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Insurance Id:</label>
    <input type="text" className="form-control" id="validationDefault05" formMethod="post" ref={Insurance_id}required/>
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
    <Link to="/profilepg" className="btn btn-primary" >All Done!</Link>
  </div>
</form>
<button
          onClick={handleSubmit}
          type="submit"
          className="m-3 btn btn-primary">
          Register!!
        </button>
</>
    );
  };
  
  export default Patientdetails;