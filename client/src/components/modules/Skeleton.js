import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./NavBar.css";

//DONE REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "875626601835-nlh62o0i41iqspllgddn883q5jsatt2v.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">goldfish</div>
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link">
            Explore
          </Link>
          {userId && (
            <Link to={`/profile/`} className="NavBar-link">
              Profile
            </Link>
          )}
          <Link to="/matches/" className="NavBar-link">
            Matches
          </Link>
        </div>
      </nav>
      <h1>Good luck on your project :)</h1>
    </GoogleOAuthProvider>
  );
};

export default Skeleton;
