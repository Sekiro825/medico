import { Link } from "react-router-dom";

const Hospitalsignin = () => {
    return(
      
    <div className="card text-center">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
        <h5>Namaste!!</h5>
          <p>Welcome to Medico - Your Comprehensive Healthcare Companion</p>
           <p>Empowering you with cutting-edge technology, Medico is your trusted partner in wellness and medical management. Seamlessly integrating advanced features, our app is designed to enhance your healthcare experience, providing a user-friendly platform that puts your well-being at the forefront.</p>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ="/hospitalsignin">SignIn</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ="/hospitalreg">Register</Link>
        </li>
      </ul>
    </div>
    <div className="card-body">
      <h5 className="card-title">New here? lets get you Signed-In</h5>
      <div className="col-my-6">
      <label for="inputEmail3-" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
    <div className="col-my-6">
      <label for="inputEmployeeid3-" className="form-label">EmployeeId</label>
      <input type="employeeid" className="form-control" id="inputEmployeeid3"/>
    </div>
    <div className="col-my-6 position-relative">
      <label for="inputPassword3" className="form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>    
      <Link to="/mainpg" className="m-3 btn btn-primary">lets go!!</Link>
    </div>
  </div>
    )
  };
  
  export default Hospitalsignin;