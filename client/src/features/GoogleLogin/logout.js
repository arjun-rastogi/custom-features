import { GoogleLogout } from "react-google-login";

const clientId =
  "67353516029-1totgl65qohmqq2mr6um36l0j0d7fj7d.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Success!");
  };
  return (
    <>
      {" "}
      <div id="signinButton">
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign out from Google"
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  );
}

export default Logout;
