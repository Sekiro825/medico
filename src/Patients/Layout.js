import { Link } from "react-router-dom";

const Layout = () => {
  
  return (
    <>
  <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Medico</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="d-flex  flex-row navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link className="m-3 btn btn-primary" to="/"role="button">Home</Link>
          </li>
          <li>
            <Link className="m-3 btn btn-primary" to="/blogs"role="button">About</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    </>
  )
};

export default Layout;