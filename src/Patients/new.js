import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../connection";

const Register = () => {
  const input = useRef();
  const email = useRef();
  const dbRef = collection(db, "users");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addDoc(dbRef, {
        name: input.current.value,
        phone: input.current.value,
        email: email.current.value,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <h5>Namaste!!</h5>
            <p>Welcome to Medico - Your Comprehensive Healthcare Companion</p>

            <p>
              Empowering you with cutting-edge technology, Medico is your
              trusted partner in wellness and medical management. Seamlessly
              integrating advanced features, our app is designed to enhance your
              healthcare experience, providing a user-friendly platform that
              puts your well-being at the forefront.
            </p>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/contact">
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">New here? lets get you Registered!</h5>
        <div>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------*/}
          <form
            action="/register"
            method="post"
            className="row g-3 needs-validation"
            novalidate>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltip01"
                className="form-label">
                Enter your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                formMethod="post"
                ref={input}
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltip02"
                className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip02"
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltipUsername"
                className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text"
                  id="validationTooltipUsernamePrepend"></span>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  ref={email}
                  required
                />
                <div className="invalid-tooltip">
                  Please choose a valid Email.
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip03"
                className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label
                for="validationTooltip05"
                className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid Username.
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label
                for="validationTooltip05"
                className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid Password.
              </div>
            </div>
          </form>
        </div>
        {/*<Link
          to="/patientdetails"
          className="m-3 btn btn-primary">
          Ur all set!
  </Link>*/}
        <button
          onClick={handleSubmit}
          type="submit"
          className="m-3 btn btn-primary">
          Register!!
        </button>
      </div>
    </div>
  );
};

export default Register;