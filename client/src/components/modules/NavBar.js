import React from "react";
import { Link } from "@reach/router";
// import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

const NavBar = (props) => {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">goldfish</div>
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link">
            Explore
          </Link>
          {props.userId && (
            <Link to={`/profile/${props.userId}`} className="NavBar-link">
              Profile
            </Link>
          )}
          <Link to="/matches/" className="NavBar-link">
            Matches
          </Link>
        </div>
    </nav>
  );
};