import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import NavBar from "./modules/NavBar.js";
import NotFound from "./pages/NotFound.js";
import Explore from "./pages/Explore.js";
import Matches from "./pages/Matches.js";
import Profile from "./pages/Profile.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
    <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
    <div>
      <Router>
        <Explore path="/" userId = {userId} />
        <Matches path="/matches" />
        <Profile path="/profile" />
        <NotFound default />
      </Router>
    </div>
    </>
  );
};

export default App;
