import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ps-4">
                <a className="nav-link active text-uppercase text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link text-uppercase text-white" href="#">about</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link text-uppercase text-white" href="#">services</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link text-uppercase text-white" href="#">portfolio</a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link text-uppercase text-white" href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
