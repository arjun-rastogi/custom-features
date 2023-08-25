import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./login";
import Logout from "./logout";

const clientId =
  "67353516029-1totgl65qohmqq2mr6um36l0j0d7fj7d.apps.googleusercontent.com";

const GoogleLogin = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
};

export default GoogleLogin;
