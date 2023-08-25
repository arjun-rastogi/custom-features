import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./login";

const clientId = "77bwmn8l7a34bv";

const LinkedInLogin = () => {
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
    </div>
  );
};

export default LinkedInLogin;
