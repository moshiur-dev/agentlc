import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Tutorial = () => {
  return (
    <div className="header-quik mt-3 home">
      <div className="header-title text-center">টিউটোরিয়াল</div>

      <div>
        <div className="header-body ">
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item p-1">
              <NavLink
                className="nav-link active"
                as={Link}
                to="/tutorial/playlist1"
              >
                User Tutorial
              </NavLink>
            </li>

            <li className="nav-item p-1">
              <NavLink className="nav-link active " to="/tutorial/playlist2">
                Agent Tutorial
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
