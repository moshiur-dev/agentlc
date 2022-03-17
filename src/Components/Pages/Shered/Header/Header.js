import React from "react";
import { Link } from "react-router-dom";
import help from "./../../../../../src/Image/help.png";
import logo from "./../../../../../src/Image/logo.jpg";
import room from "./../../../../../src/Image/rooms (1).png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-dev">
        <div className="header-img">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navigation mt-4">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                <img src={room} alt="" />
                তথ্য
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cs">
                <img src={help} alt="কাস্টমার সার্ভিস" />
                কাস্টমার সার্ভিস
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                {/* <img src={room} alt="এডমিন" /> */}
                <i
                  className="fas fa-user-alt"
                  style={{ marginRight: "10px" }}
                />
                এডমিন
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/subadmin">
                {/* <img src={room} alt="সাব এডমিন" /> */}
                <i
                  className="fas fa-user-alt"
                  style={{ marginRight: "10px" }}
                />
                সাব এডমিন
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/as">
                <i
                  className="fas fa-user-friends"
                  style={{ marginRight: "10px" }}
                />
                সুপার এজেন্ট
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/mg"
                style={{ paddingLeft: "8px" }}
              >
                <i
                  className="fas fa-user-friends"
                  style={{ marginRight: "10px" }}
                />
                অনলাইন মাষ্টার এজেন্ট
              </Link>
            </li>
            <li className="nav-item" style={{ borderRight: "0" }}>
              <Link className="nav-link" to="/tutorial">
                <i className="fas fa-video" style={{ marginRight: "10px" }} />
                টিউটোরিয়াল
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
