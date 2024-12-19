import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            FindHouse
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <img src="images/user.png"  className="user-pic"/>

            <div className="sub-menu-wrap">
              <div className="sub-menu">
                <div className="user-info">
                  <img src="images/user.png"  className="user-pic"/>
                  <h2>Jamal babia  </h2>
                </div>
              </div>
            </div>
            {/* <form class="d-flex ">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
              />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form> */}
          </div>
          {/* <Dropdown>
                    <Dropdown.Toggle className="rounded-4 px-3 mx-1" variant="danger">
                        <i class="bi bi-person-lines-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Sing up</Dropdown.Item>
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

        </div>
      </nav>
    </div>
  );
}
