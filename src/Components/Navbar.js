import React from "react";
import { NavLink } from "react-router-dom";
// import fontawesome for React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <div className="container navbar-bg">
        <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="./">
              <div className="d-flex justify-content-between">
                <FontAwesomeIcon icon={["fa", "child"]} />
                <FontAwesomeIcon
                  className="sport-icon-right"
                  icon={["fa", "running"]}
                />
                <FontAwesomeIcon
                  className="sport-icon-right"
                  icon={["fa", "biking"]}
                />
                <FontAwesomeIcon icon={["fa", "table-tennis"]} />
                <FontAwesomeIcon
                  className="sport-icon-left"
                  icon={["fa", "swimmer"]}
                />
                <FontAwesomeIcon
                  className="sport-icon-rotate"
                  icon={["fa", "futbol"]}
                />
                <FontAwesomeIcon
                  className="sport-icon-desc"
                  icon={["fa", "skiing"]}
                />
              </div>
              <div>
                <b>The Blog</b> about Sports in Life
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
